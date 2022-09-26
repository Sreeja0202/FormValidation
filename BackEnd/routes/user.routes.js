const express = require("express");
const userRoutes = express.Router();
const User = require("../model/user.model.js");
const cors = require("cors");
const app = new express();
app.use(cors());

userRoutes.post("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
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

userRoutes.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
  User.find((err, doc) => {
    if (err) {
      console.log("Error in getting Data", +err);
    } else {
      res.send(doc);
    }
  });
});

module.exports = userRoutes;
