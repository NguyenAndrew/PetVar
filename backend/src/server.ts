import { app, port } from "./app.js";
// eslint-disable-next-line @typescript-eslint/no-require-imports
require("source-map-support").install();

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
