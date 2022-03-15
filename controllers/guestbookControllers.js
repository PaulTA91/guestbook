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
  res.render("entries", {
    title: "Guest Book",
    entries: [
      {
        subject: "Good day out",
        contents: "We had a really good time visiting the museum.",
      },
      {
        subject: "Good place to be on a rainy day.",
        contents: "Nice paintings too.",
      },
      {
        subject: "Yummy",
        contents: "Good food :-).",
      },
    ],
  });
};

exports.new_entry = function (req, res) {
  res.send("Not yet implemented: show a new entry page");
};
