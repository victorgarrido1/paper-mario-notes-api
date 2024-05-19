const mongoose = require('mongoose');

// Define the schema for a Mario character
const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true // Name is required
  },
  inventory: [{
    item: {
      type: String,
      required: true // Each inventory item must have a name
    },
    quantity: {
      type: Number,
      required: true, // Each inventory item must have a quantity
      min: 1 // Ensure quantity is at least 1
    }
  }],
  badge: {
    type: String,
    required: true // Badge is required
  }
});

// Create the Character model from the schema
const Character = mongoose.model('Character', characterSchema);

module.exports =  Character ; // Export the Character model
