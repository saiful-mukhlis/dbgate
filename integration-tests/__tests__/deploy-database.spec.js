/// TODO

const { testWrapper } = require('../tools');
const _ = require('lodash');
const engines = require('../engines');
const deployDb = require('dbgate-api/src/shell/deployDb');
const { databaseInfoFromYamlModel } = require('dbgate-tools');
const generateDeploySql = require('dbgate-api/src/shell/generateDeploySql');

function checkStructure(structure, model) {
  const expected = databaseInfoFromYamlModel(model);
  expect(structure.tables.length).toEqual(expected.tables.length);

  for (const [realTable, expectedTable] of _.zip(
    _.sortBy(structure.tables, 'pureName'),
    _.sortBy(expected.tables, 'pureName')
  )) {
    expect(realTable.columns.length).toBeGreaterThanOrEqual(expectedTable.columns.length);
  }
}

async function testDatabaseDeploy(conn, driver, dbModelsYaml, testEmptyLastScript) {
  let index = 0;
  for (const loadedDbModel of dbModelsYaml) {
    const { sql, isEmpty } = await generateDeploySql({
      systemConnection: conn,
      driver,
      loadedDbModel,
    });
    console.debug('Generated deploy script:', sql);
    expect(sql.toUpperCase().includes('DROP ')).toBeFalsy();

    console.log('dbModelsYaml.length', dbModelsYaml.length, index);
    if (testEmptyLastScript && index == dbModelsYaml.length - 1) {
      expect(isEmpty).toBeTruthy();
    }

    await deployDb({
      systemConnection: conn,
      driver,
      loadedDbModel,
    });

    index++;
  }

  const structure = await driver.analyseFull(conn);
  checkStructure(structure, dbModelsYaml[dbModelsYaml.length - 1]);
}

describe('Deploy database', () => {
  test.each(engines.map(engine => [engine.label, engine]))(
    'Deploy database simple - %s',
    testWrapper(async (conn, driver, engine) => {
      await testDatabaseDeploy(conn, driver, [
        [
          {
            name: 't1.table.yaml',
            json: {
              name: 't1',
              columns: [{ name: 'id', type: 'int' }],
              primaryKey: ['id'],
            },
          },
        ],
      ]);
    })
  );

  test.each(engines.map(engine => [engine.label, engine]))(
    'Deploy database simple twice - %s',
    testWrapper(async (conn, driver, engine) => {
      await testDatabaseDeploy(
        conn,
        driver,
        [
          [
            {
              name: 't1.table.yaml',
              json: {
                name: 't1',
                columns: [{ name: 'id', type: 'int' }],
                primaryKey: ['id'],
              },
            },
          ],
          [
            {
              name: 't1.table.yaml',
              json: {
                name: 't1',
                columns: [{ name: 'id', type: 'int' }],
                primaryKey: ['id'],
              },
            },
          ],
        ],
        true
      );
    })
  );

  test.each(engines.map(engine => [engine.label, engine]))(
    'Add column - %s',
    testWrapper(async (conn, driver, engine) => {
      await testDatabaseDeploy(conn, driver, [
        [
          {
            name: 't1.table.yaml',
            json: {
              name: 't1',
              columns: [{ name: 'id', type: 'int' }],
              primaryKey: ['id'],
            },
          },
        ],
        [
          {
            name: 't1.table.yaml',
            json: {
              name: 't1',
              columns: [
                { name: 'id', type: 'int' },
                { name: 'val', type: 'int' },
              ],
              primaryKey: ['id'],
            },
          },
        ],
      ]);
    })
  );

  test.each(engines.map(engine => [engine.label, engine]))(
    'Dont drop column - %s',
    testWrapper(async (conn, driver, engine) => {
      await testDatabaseDeploy(
        conn,
        driver,
        [
          [
            {
              name: 't1.table.yaml',
              json: {
                name: 't1',
                columns: [
                  { name: 'id', type: 'int' },
                  { name: 'val', type: 'int' },
                ],
                primaryKey: ['id'],
              },
            },
          ],
          [
            {
              name: 't1.table.yaml',
              json: {
                name: 't1',
                columns: [{ name: 'id', type: 'int' }],
                primaryKey: ['id'],
              },
            },
          ],
        ],
        true
      );
    })
  );

  test.each(engines.map(engine => [engine.label, engine]))(
    'Foreign keys - %s',
    testWrapper(async (conn, driver, engine) => {
      await testDatabaseDeploy(
        conn,
        driver,
        [
          [
            {
              name: 't2.table.yaml',
              json: {
                name: 't2',
                columns: [
                  { name: 't2id', type: 'int' },
                  { name: 't1id', type: 'int', references: 't1' },
                ],
                primaryKey: ['t2id'],
              },
            },
            {
              name: 't1.table.yaml',
              json: {
                name: 't1',
                columns: [{ name: 't1id', type: 'int' }],
                primaryKey: ['t1id'],
              },
            },
          ],
          [
            {
              name: 't2.table.yaml',
              json: {
                name: 't2',
                columns: [
                  { name: 't2id', type: 'int' },
                  { name: 't1id', type: 'int', references: 't1' },
                ],
                primaryKey: ['t2id'],
              },
            },
            {
              name: 't1.table.yaml',
              json: {
                name: 't1',
                columns: [{ name: 't1id', type: 'int' }],
                primaryKey: ['t1id'],
              },
            },
          ],
        ],
        true
      );
    })
  );

  test.each(engines.map(engine => [engine.label, engine]))(
    'Deploy preloaded data - %s',
    testWrapper(async (conn, driver, engine) => {
      await testDatabaseDeploy(conn, driver, [
        [
          {
            name: 't1.table.yaml',
            json: {
              name: 't1',
              columns: [
                { name: 'id', type: 'int' },
                { name: 'value', type: 'int' },
              ],
              primaryKey: ['id'],
              data: [
                { id: 1, value: 1 },
                { id: 2, value: 2 },
                { id: 3, value: 3 },
              ],
            },
          },
        ],
      ]);

      const res = await driver.query(conn, `select count(*) as cnt from t1`);
      expect(res.rows[0].cnt.toString()).toEqual('3');
    })
  );

  test.each(engines.map(engine => [engine.label, engine]))(
    'Deploy preloaded data - update - %s',
    testWrapper(async (conn, driver, engine) => {
      await testDatabaseDeploy(conn, driver, [
        [
          {
            name: 't1.table.yaml',
            json: {
              name: 't1',
              columns: [
                { name: 'id', type: 'int' },
                { name: 'val', type: 'int' },
              ],
              primaryKey: ['id'],
              data: [
                { id: 1, val: 1 },
                { id: 2, val: 2 },
                { id: 3, val: 3 },
              ],
            },
          },
        ],
        [
          {
            name: 't1.table.yaml',
            json: {
              name: 't1',
              columns: [
                { name: 'id', type: 'int' },
                { name: 'val', type: 'int' },
              ],
              primaryKey: ['id'],
              data: [
                { id: 1, val: 1 },
                { id: 2, val: 5 },
                { id: 3, val: 3 },
              ],
            },
          },
        ],
      ]);

      const res = await driver.query(conn, `select val from t1 where id = 2`);
      expect(res.rows[0].val.toString()).toEqual('5');
    })
  );

  test.each(engines.enginesPostgre.map(engine => [engine.label, engine]))(
    'Current timestamp default value - %s',
    testWrapper(async (conn, driver, engine) => {
      await testDatabaseDeploy(conn, driver, [
        [
          {
            name: 't1.table.yaml',
            json: {
              name: 't1',
              columns: [
                { name: 'id', type: 'int' },
                {
                  name: 'val',
                  type: 'timestamp',
                  default: 'current_timestamp',
                },
              ],
              primaryKey: ['id'],
            },
          },
        ],
      ]);

      await driver.query(conn, `insert into t1 (id) values (1)`);
      const res = await driver.query(conn, ` select val from t1 where id = 1`);
      expect(res.rows[0].val.toString().substring(0, 2)).toEqual('20');
    })
  );
});
