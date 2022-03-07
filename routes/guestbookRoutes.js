const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("Hello! Welcome to the guestbook application");
});

router.get("/guestbook", function (req, res) {
  res.send("<h1>Guestbook Messages</h1>");
});

router.use(function (req, res) {
  res.status(404);
  res.type("text/plain");
  res.send("4040 Not Found");
});

router.use(function (err, req, res, next) {
  res.status(500);
  res.type("text/plain");
  res.send("Internal Server Error.");
});

module.exports = router;
