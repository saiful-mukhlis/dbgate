const {
  getAlterDatabaseScript,
  generateDbPairingId,
  matchPairedObjects,
  databaseInfoFromYamlModel,
  extendDatabaseInfo,
  modelCompareDbDiffOptions,
  enrichWithPreloadedRows,
} = require('dbgate-tools');
const importDbModel = require('../utility/importDbModel');
const requireEngineDriver = require('../utility/requireEngineDriver');
const connectUtility = require('../utility/connectUtility');

async function generateDeploySql({
  connection,
  systemConnection = undefined,
  driver = undefined,
  analysedStructure = undefined,
  modelFolder = undefined,
  loadedDbModel = undefined,
}) {
  if (!driver) driver = requireEngineDriver(connection);

  const pool = systemConnection || (await connectUtility(driver, connection, 'read'));
  if (!analysedStructure) {
    analysedStructure = await driver.analyseFull(pool);
  }

  const deployedModel = generateDbPairingId(
    extendDatabaseInfo(loadedDbModel ? databaseInfoFromYamlModel(loadedDbModel) : await importDbModel(modelFolder))
  );
  const currentModel = generateDbPairingId(extendDatabaseInfo(analysedStructure));
  const opts = {
    ...modelCompareDbDiffOptions,

    noDropTable: true,
    noDropColumn: true,
    noDropConstraint: true,
    noDropSqlObject: true,
    noRenameTable: true,
    noRenameColumn: true,
  };
  const currentModelPaired = matchPairedObjects(deployedModel, currentModel, opts);
  const currentModelPairedPreloaded = await enrichWithPreloadedRows(deployedModel, currentModelPaired, pool, driver);

  // console.log('currentModelPairedPreloaded', currentModelPairedPreloaded.tables[0]);
  // console.log('deployedModel', deployedModel.tables[0]);
  // console.log('currentModel', currentModel.tables[0]);
  // console.log('currentModelPaired', currentModelPaired.tables[0]);
  const res = getAlterDatabaseScript(
    currentModelPairedPreloaded,
    deployedModel,
    opts,
    currentModelPairedPreloaded,
    deployedModel,
    driver
  );
  return res;
}

module.exports = generateDeploySql;
