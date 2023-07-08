#!/usr/bin/env node
const rimraf = require('rimraf');
const path = require('path');
const os = require('os');
const fs = require('fs');
const ncp = require('ncp');
const pacote = require('pacote');

const packageName = process.argv[2];
if (!packageName) throw new Error('Missing package name');

const pluginDir = path.join(os.homedir(), '.dbgate', 'plugins', packageName);

rimraf.sync(pluginDir)

const tgzFile = fs.readdirSync(process.cwd()).find(x => x.endsWith('.tgz'));

if (tgzFile) {
  pacote.extract(tgzFile, pluginDir).then(() => {
    fs.unlink(tgzFile, () => {});
  });
} else {
  ncp(process.cwd(), pluginDir);
}
