require('dotenv').config();

const vars = {
  port: process.env.PORT,
  mongo: process.env.MONGO_URI,
};

module.exports = vars;
