const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("Hello! Welcome to the guestbook application");
});

router.get("/guestbook", function (req, res) {
  res.send("<h1>Guestbook Messages</h1>");
});

module.exports = router;
