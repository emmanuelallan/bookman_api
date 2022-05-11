const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const { accessToken } = require('../config/vars.config');

const verifyToken = (req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'JWT'
  ) {
    jwt.verify(
      req.headers.authorization.split(' ')[1],
      accessToken,
      function (err, decode) {
        if (err) res.status(500).send({ message: err });
        User.findOne({
          _id: decode.id,
        }).exec((err, user) => {
          if (err) {
            res.status(500).send({
              message: err,
            });
          } else {
            if (user.role === 'admin') {
              next();
            } else {
              res.status(403).send({
                message: 'Unauthorised access',
              });
            }
          }
        });
      }
    );
  } else {
    res.status(403).send({
      message: 'Invalid JWT token',
    });
  }
};
module.exports = verifyToken;
