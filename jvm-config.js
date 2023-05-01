const dotenv = require("dotenv-safe");

let ENV_FILE_NAME = "";
switch (process.env.NODE_ENV) {
  case "production":
    ENV_FILE_NAME = ".env.production";
    break;
  case "staging":
    ENV_FILE_NAME = ".env.staging";
    break;
  case "test":
    ENV_FILE_NAME = ".env.test";
    break;
  case "development":
  default:
    ENV_FILE_NAME = ".env";
    break;
}

try {
  dotenv.config({ path: process.cwd() + "/" + ENV_FILE_NAME });
} catch (e) {}


/** @type {import('./nodejs-package-starter/dist').ConfigModule['projectConfig']} */
const projectConfig = {
     port: 9000,
}

/** @type {import('./nodejs-package-starter/dist').ConfigModule} */
module.exports = {
    projectConfig
}