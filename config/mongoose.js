const mongoose = require('mongoose');
const logger = require('./logger');
const { mongo, env } = require('./vars');

// set mognoose Promise to bluebird
mongoose.Promise = Promise;

// exit application on error
mongoose.connection.on('error', (err) => {
  logger.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

// print mongoose logs in dev env
if (env === 'development') {
  mongoose.set('debug', true);
}

// connect to mongo db
exports.connect = () => {
  mongoose
    .connect(mongo.uri, {
      keepAlive: 1,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('mongoDB connected...'));
  return mongoose.connection;
};
