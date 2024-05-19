const express = require("express");
const mongoose = require("mongoose");
const Character = require("./models/Characters.js");
const characterRoutes = require("./routes/character.routes.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false })); // allows to support other forms of sending info

app.use("/api/characters", characterRoutes);

app.get("/", (req, res) => {
  res.send("Hello From Node API !!");
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
