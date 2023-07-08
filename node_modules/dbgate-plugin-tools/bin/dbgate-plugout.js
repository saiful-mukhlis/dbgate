#!/usr/bin/env node

const rimraf = require('rimraf');
const path = require('path');
const os = require('os');

const packageName = process.argv[2]
if (!packageName) throw new Error('Missing package name')

const pluginDir = path.join(os.homedir(), '.dbgate', 'plugins', packageName)

rimraf.sync(pluginDir)
