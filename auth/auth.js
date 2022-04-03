const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const res = require("express/lib/response");

exports.login = function (req, res, next) {
  let username = req.body.username;
  let password = req.body.password;
};

userModel.lookup(usernmae, function (err, user) {
  if (err) {
    console.log("error looking up user", err);
    return res.status(401).send();
  }
  if (!user) {
    console.log("user ", username, " not found");
    return res.status(401).send();
  }
  //compare provided password with stored password
  bcrypt.compare(password, user.password, function (err, result) {
    if (result) {
      let payload = { username: username };
      let accessToken = jwt.sign(
        payload,
        process.eventNames.ACCESS_TOKEN_SECRET
      );
      res.cookie("jwt", accessToken);
      next();
    } else {
      return res.status(403).send();
    }
  });
});
