const res = require("express/lib/response");
const guestbookDAO = require("../models/guestbookModels");
const db = new guestbookDAO();

db.init();

exports.entries_list = function (req, res) {
  res.send(
    "<h1>Guestbook Messages</h1><p>Not yet implemented: will show a list of guest book entries.</p>"
  );
};

exports.landing_page = function (req, res) {
  db.getAllEntries()
    .then((list) => {
      res.render("entries", {
        title: "Guest Book",
        entries: list,
      });
      console.log("promise resolved");
    })
    .catch((err) => {
      console.log("promise rejected", err);
    });
};

exports.show_register_page = function (req, res) {
  res.render("user/register");
};

exports.show_user_entries = function (req, res) {
  console.log("filtering author name", req.params.author);
  let user = req.params.author;
  db.getEntriesByUser(user)
    .then((entries) => {
      res.render("entries", {
        title: "Guest Book",
        entries: entries,
      });
    })
    .catch((err) => {
      console.log("error handling author posts", err);
    });
};

exports.new_entry = function (req, res) {
  res.render("newEntry", {
    title: "Guest Book",
  });
};

exports.post_new_entry = function (req, res) {
  console.log("processing post-new_entry controller");
  if (!req.body.author) {
    response.status(400).send("Entries must have an author");
    return;
  }
  db.addEntry(req.body.author, req.body.subject, req.body.contents);
  res.redirect("/");
};
