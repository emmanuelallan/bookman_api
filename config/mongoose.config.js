const mongoose = require('mongoose');
const { mongo } = require('./vars.config');

mongoose.connection.on('err', (err) => {
  console.log(err);
  process.exit(-1);
});

exports.connect = () => {
  mongoose
    .connect(mongo, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Mongoose connected successfully'));

  return mongoose.connection;
};
