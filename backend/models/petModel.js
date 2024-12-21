const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  species: { type: String, required: true },
  age: { type: Number, required: true },
  breed: { type: String, required: true },
  gender: { type: String, required: true },
  size: { type: String, required: true },
  color: { type: String, required: true },
  about: { type: String, required: true },
  vaccinated: { type: Boolean, required: true },
  neutered: { type: Boolean, required: true },
  medicalConditions: { type: String, required: true },
  adoptionFee: { type: Number, required: true },
  picture: { type: String, required: true }
});

module.exports = mongoose.model('Pet', petSchema);