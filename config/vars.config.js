require('dotenv').config();

const vars = {
  port: process.env.PORT,
  mongo: process.env.MONGO_URI,
  accessToken: process.env.ACCESS_TOKEN,
};

module.exports = vars;
