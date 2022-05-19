const app = require('./config/express.config');
const mongoose = require('./config/mongoose.config');
const { port } = require('./config/vars.config');

// connnect to mongo atlas
mongoose.connect();

// start server
app.listen(port || 8080, () =>
  console.log(`Server started at http://localhost:${port}`)
);
