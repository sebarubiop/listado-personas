const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; // Import Schema from Mongoose

// Persona Model Definition
const personaSchema = new Schema({
    createdAt: { type: Date, default: Date.now },
    rut: { type: String },
    name: { type: String },
    last_name: { type: String },
    age: { type: Number },
    address: { type: String },
});

// Export Module/Schema
const Persona = mongoose.model('Persona', personaSchema, 'personas');
module.exports = Persona;
