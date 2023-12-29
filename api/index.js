const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

const User = require("./models/User");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, (err) => {
  if (err) throw err;
});
jwtSecret = process.env.JWT_SECRET;

const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const createdUser = await User.create({ username, password });
  } catch (err) {
    if (err) throw err;
    res.status(500).json("error");
  }

  jwt.sign({ userId: createdUser._id }, jwtSecret, {}, (err, token) => {
    if (err) throw err;
    res.cookie("token", token).status(201).json("ok");
  });
});

app.listen(4000);
