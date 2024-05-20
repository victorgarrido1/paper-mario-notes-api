const { model, get } = require("mongoose");
const Character = require("../models/Characters");

// TO GET ALL Characters
const getCharacters = async (req, res) => {
  try {
    const characters = await Character.find({});
    res.status(200).json(characters);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// TO GET A SINGLE Character
const getCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    const character = await Character.findById(id);
    if (!character) {
      // If the character is not found, return a 404 Not Found response
      return res.status(404).json({ error: "Character not found" });
    }
    // If the character is found, return it as JSON
    res.status(200).json(character);
  } catch (err) {
    // If an error occurs, log the error and return a 500 Internal Server Error response
    console.error("Error fetching character", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// TO CREATE A NEW Character
const createCharacter = async (req, res) => {
  try {
    const character = await Character.create(req.body);
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCharacter = async (req, res) => {
  try {
    const { id } = req.params;

    const character = await Character.findByIdAndUpdate(id, req.body);

    if (!character) {
      return res.status(404).json({ message: "Character is not found" });
    }

    const updatedCharacter = await Character.findById(id);
    res.status(200).json(updatedCharacter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    const character = await Character.findByIdAndDelete(id);

    if (!character) {
      return res.status(404).json({ error: "Character not found" });
    }

    res.status(200).json({ message: "Character deleted successfully" });
  } catch (err) {
    console.error("Error deleting character:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getCharacters,
  getCharacter,
  createCharacter,
  updateCharacter,
  deleteCharacter,
};
