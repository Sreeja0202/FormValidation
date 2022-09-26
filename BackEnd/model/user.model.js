const mongoose = require("../db.js");
const User = mongoose.model("user", {
  fname: {
    type: String,
  },
  femail: {
    type: String,
  },
  fpassword: {
    type: String,
  },
});

module.exports = User;
