const express = require("express");
const userRoutes = express.Router();
const User = require("../model/user.model.js");

userRoutes.post("/", (req, res) => {
  let user = new User({
    fname: req.body.fname,
    femail: req.body.femail,
    fpassword: req.body.fpassword,
  });
  user.save((err, doc) => {
    if (err) {
      console.log("Error in Saving User Details", +err);
    } else {
      res.send(doc);
    }
  });
});

module.exports = userRoutes;
