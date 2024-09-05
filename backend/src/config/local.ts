import ConfigTemplate from "./configTemplate";

const config: ConfigTemplate = {
  port: 3001,
  serveFrontEnd: true,
  pocketbaseUsername: process.env.POCKETBASE_USERNAME,
  pocketbasePassword: process.env.POCKETBASE_PASSWORD,
};

export default config;
