const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const { accessToken } = require('../config/vars.config');

// create user
exports.register = (req, res) => {
  const { email, role, password } = req.body;

  // generate new user from req.body
  const user = new User({
    email,
    role,
    password: bcrypt.hashSync(password, 10),
  });

  //   save the user
  user.save((err, user) => {
    if (err) {
      res.status(500).send({
        message: err,
      });

      return;
    } else {
      res.status(200).send({
        message: 'User successfully registered!',
      });
    }
  });
};

// login a user
exports.login((req, res) => {
  // find user by email
  User.findOne({
    email: req.body.email,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({
        message: err,
      });

      return;
    }

    // user not found
    if (!user) {
      return res.status(404).send({
        message: 'User Not Found!',
      });
    }

    // compare passwords
    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    // check if password is valid
    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: 'Invalid Password',
      });
    }

    // sign in the user
    const token = jwt.sign(
      {
        id: user.id,
      },
      accessToken,
      {
        expiresIn: 86400,
      }
    );

    // res to client request
    res.status(200).send({
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
        createdAt: user.created,
      },
      message: 'Login Successfull',
      accessToken: token,
    });
  });
});
