const express = require("express");
const mongoose = require("mongoose");
const characterRoutes = require("./routes/character.routes");
const connectDB = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3004;


// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/characters", characterRoutes)

// Basic route for testing
app.get("/", (req, res) => {
  res.send("Hello From Node API");
});

// Connect to MongoDB, define models, and start the server

mongoose
  .connect(
    "mongodb+srv://vgarrido009:Ocv4RMfnqWhl9TQO@papermarionotes.jmlrwvi.mongodb.net/?retryWrites=true&w=majority&appName=PaperMarioNotes"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    
  })
  .catch(() => {
    console.log("Connection failed!");
  });
  