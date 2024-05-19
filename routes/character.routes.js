const express = require("express");
const router = express.Router();
const { getCharacters, getCharacter, createCharacter, updateCharacter, deleteCharacter } = require("../controllers/character.controller");

// Define routes
router.get("/", getCharacters);
router.get("/:id", getCharacter);


router.post("/", createCharacter);


router.put("/:id", updateCharacter); // Corrected from `router.update`

router.delete("/:id", deleteCharacter);



module.exports = router;
