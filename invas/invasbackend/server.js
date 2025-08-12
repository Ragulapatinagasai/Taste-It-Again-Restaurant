//server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const items = require("./models/MenueModels");
const user = require("./models/UserModels");
const ContactMessage = require("./models/ContactMessage");
const cors = require("cors");

const PORT = process.env.PORT || 3000;
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/getitems", async (req, res) => {
  try {
    const disitems = await items.find({});
    res.status(200).json(disitems);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/getuserdetails", async (req, res) => {
  try {
    const userdetails = await user.find({});
    res.status(200).json(userdetails);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.post("/addmenueitem", async (req, res) => {
  try {
    const item = await items.create(req.body);
    res.status(200).json(item);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});
app.post("/registrenewuser", async (req, res) => {
  try {
    const userdetails = await user.create(req.body);
    res.status(200).json(userdetails);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});
app.post("/loginuser", async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await user.findOne({ email, password });
    if (userFound) {
      // User found, login successful
      res.status(200).json({ message: "Login successful", user: userFound });
    } else {
      // User not found or invalid credentials
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error logging in:", error.message);
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
});
app.get("/getcontactmessages", async (req, res) => {
  try {
    const messages = await ContactMessage.find({});
    res.status(200).json(messages);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error fetching contact messages",
      error: error.message,
    });
  }
});

app.post("/submitcontact", async (req, res) => {
  try {
    const message = await ContactMessage.create(req.body);
    res
      .status(200)
      .json({ message: "Form submitted successfully.", data: message });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Error submitting form.", error: error.message });
  }
});

mongoose
  .connect("mongodb+srv://Nagasai:Nagasai1432@cluster0.e03exxd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
