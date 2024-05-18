const { Schema, models } = require("mongoose");
const Character = mongoose.model('Character', schema);


const mario = new Character({ name: 'Mario', inventory: { hammer: 1}});
await mario.save();
let doc = await Character.findOne({ name: 'Mario'}).lean();


const personSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            trim: true,
            required: true
        },
        email: {
            type
        }
    }
)