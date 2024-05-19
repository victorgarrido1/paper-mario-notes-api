const express = require("express");
const mongoose = require("mongoose");
const Character = require("./models/Characters.js");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello From Node API !!");
});

app.post("/api/characters", async (req, res) => {
  try {
    const character = await Character.create(req.body);
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://vgarrido009:Ocv4RMfnqWhl9TQO@papermarionotes.jmlrwvi.mongodb.net/?retryWrites=true&w=majority&appName=PaperMarioNotes"
  )
  .then(() => {
    console.log("Connected to the DB");
    app.listen(3004, () => {
      console.log("App listening on port 3004");
    });
  })
  .catch(() => {
    console.log("Failed to connect");
  });
