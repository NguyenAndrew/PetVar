import axios from "axios";
import path from "path";
import express, { Request, Response } from "express";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const helmet = require("helmet");
import host from "./host/host";
import getConfig from "./config/config";
import ConfigTemplate from "./config/configTemplate";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const PocketBase = require('pocketbase/cjs')

const config: ConfigTemplate = getConfig();

const app = express();
const port = config.port;

app.use(helmet());

app.get("/health", (req: Request, res: Response) => {
  axios.post(`${host}/axios-test`);
  res.status(200).send("Healthy!");
});

app.get("/pocketbase-message", async (req: Request, res: Response) => {
  const pb = new PocketBase('http://127.0.0.1:8090');
  const record = await pb.collection('hello_collection').getOne('23m7tql9bli4qiz');
  const message = record.message;
  res.status(200).send(message);
});

app.post("/axios-test", (req: Request, res: Response) => {
  console.log("You have succesfully made an axios call!");
  res.status(200).send("axios-test completed succesfully!");
});

if (config.serveFrontEnd) {
  console.log("Server is running on the cloud");

  const frontEndBuildFolder = "frontend/dist";

  app.use(
    express.static(path.join(__dirname, "../../..", frontEndBuildFolder)),
  );

  app.get("/", (_req: Request, res: Response) => {
    res.sendFile(
      path.join(__dirname, "../../..", frontEndBuildFolder, "index.html"),
    );
  });
} else {
  console.log("Server is not running on the cloud");
}

export { app, port };
