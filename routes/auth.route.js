const express = require("express");
const router = express.Router();
const { register, login, reset } = require("../controllers/auth.controller");

// register
router.post("/register", register);

// login
router.post("/login", login);

// reset password
router.patch("/reset", reset);

module.exports = router;
