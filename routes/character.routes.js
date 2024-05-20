const express = require("express");
const router = express.Router();
const {
  getCharacters,
  getCharacter,
  createCharacter,
  updateCharacter,
  deleteCharacter,
} = require("../controllers/character.controller");

// Define routes
router.get("/", getCharacters);


router.get("/:id", getCharacter);


router.post("/", createCharacter);


router.put("/:id", updateCharacter); // Corrected to use `put` method for updating
router.delete("/:id", deleteCharacter); // Added delete route

module.exports = router;
// try {
//   const { id } = req.params;

//   const product = await Product.findByIdAndUpdate(id, req.body);

//   if (!product) {
//     return res.status(404).json({ message: "Product not found" });
//   }

//   const updatedProduct = await Product.findById(id);
//   res.status(200).json(updatedProduct);
// } catch (error) {
//   res.status(500).json({ message: error.message });
// }