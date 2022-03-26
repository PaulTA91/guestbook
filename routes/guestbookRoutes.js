const express = require("express");
const router = express.Router();

const controller = require("../controllers/guestbookControllers.js");

router.get("/", controller.landing_page);

router.get("/guestbook", controller.entries_list);

router.get("/new_entry", controller.new_entry);

router.get("/about", function (req, res) {
  res.redirect("/about.html");
});

router.get("/posts/:author", controller.show_user_entries);

router.get("/new", controller.new_entry);
router.post("/new", controller.post_new_entry);

router.use(function (req, res) {
  res.status(404);
  res.type("text/plain");
  res.send("404 Not Found");
});

router.use(function (err, req, res, next) {
  res.status(500);
  res.type("text/plain");
  res.send("Internal Server Error.");
});

module.exports = router;
