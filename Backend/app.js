const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectToDb = require("./db/db");
const userRoutes = require("./routes/userRoutes");
const captainRoutes = require("./routes/captainRoutes");
const cookieParser = require("cookie-parser");

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/users", userRoutes);
app.use("/captains", captainRoutes);

app.get("/", (req, res) => {
  res.send("hello world!");
});

module.exports = app;
