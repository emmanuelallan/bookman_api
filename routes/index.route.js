const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    status: "Okay",
  });
});

module.exports = router;
