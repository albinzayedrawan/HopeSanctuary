const mongoose = require('mongoose');

const adoptionFormSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  pet: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet', required: true },
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  addressLine: { type: String, required: true },
  city: { type: String, required: true },
  zipCode: { type: String, required: true },
  status: { type: String, default: 'Pending' }
});

module.exports = mongoose.model('AdoptionForm', adoptionFormSchema);