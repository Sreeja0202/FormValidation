const { mongoose } = require("mongoose");
mongoose.connect(
  "mongodb+srv://sreejamohan444:cluster0@cluster0.mwlsecd.mongodb.net/FormDB",
  (err) => {
    if (!err) {
      console.log("DB connection successfully established!!!");
    } else {
      console.log("Error in connection", +err);
    }
  }
);

module.exports = mongoose;
