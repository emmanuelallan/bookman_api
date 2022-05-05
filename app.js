const app = require("./config/express.config");
const port = require("./config/vars.config");

// start server
app.listen(port || 8080, () =>
  console.log(`Server started at http://localhost:${port}`)
);
