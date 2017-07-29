'use strict';

const path = require('path');
const fs = require('fs');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolvePath = relativePath => path.resolve(appDirectory, relativePath);

// config after eject: we're in ./config/
module.exports = {
  dotenv: resolvePath('./config/.env'),
  appBuild: resolvePath('./dist'),
  appIndexJs: resolvePath('./src/index.js'),
  appPackageJson: resolvePath('./package.json'),
  appSrc: resolvePath('./src'),
  styleSrc: resolvePath('./src/styles'),
  yarnLockFile: resolvePath('./yarn.lock'),
  appNodeModules: resolvePath('./node_modules')
};
