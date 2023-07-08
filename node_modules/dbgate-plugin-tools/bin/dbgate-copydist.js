#!/usr/bin/env node
const rimraf = require('rimraf');
const fs = require('fs');
const ncp = require('ncp');
const pacote = require('pacote');

const pluginDir = process.argv[2];

if (!pluginDir) throw new Error('Missing plugin directory');
if (!pluginDir.includes('dbgate-plugin-')) throw new Error('Invalid plugin directory');

rimraf.sync(pluginDir)

const tgzFile = fs.readdirSync(process.cwd()).find(x => x.endsWith('.tgz'));

if (tgzFile) {
  pacote.extract(tgzFile, pluginDir).then(() => {
    fs.unlink(tgzFile, () => {});
  });
} else {
  ncp(process.cwd(), pluginDir);
}
