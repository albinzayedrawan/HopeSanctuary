const mongoose = require('mongoose');

const adoptionFormSchema = new mongoose.Schema({
  pet: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet', required: true },
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  addressLine: { type: String, required: true },
  city: { type: String, required: true },
  zipCode: { type: String, required: true }
});

module.exports = mongoose.model('AdoptionForm', adoptionFormSchema);