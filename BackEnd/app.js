const express = require("express");
const cors = require("cors");
const mongoose = require("./db.js");
const userRoutes = require("./routes/user.routes.js");

const app = new express();

app.use(express.json());
app.use(cors());

app.listen("3000", () => {
  console.log("Server started @ port 3000");
});

app.use("/users", userRoutes);
