const AdoptionForm = require('../models/adoptionFormModel');

// Get all adoption forms
exports.getAllAdoptionForms = async (req, res) => {
  try {
    const forms = await AdoptionForm.find().populate('pet').populate('user');
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get adoption form by ID
exports.getAdoptionFormById = async (req, res) => {
  try {
    const form = await AdoptionForm.findById(req.params.id).populate('pet').populate('user');
    if (!form) return res.status(404).json({ message: 'Form not found' });
    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new adoption form
exports.createAdoptionForm = async (req, res) => {
  const form = new AdoptionForm({
    ...req.body,
    user: req.user._id // Ensure user ID is included
  });
  try {
    const newForm = await form.save();
    res.status(201).json(newForm);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an adoption form
exports.updateAdoptionForm = async (req, res) => {
  try {
    const updatedForm = await AdoptionForm.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedForm) return res.status(404).json({ message: 'Form not found' });
    res.status(200).json(updatedForm);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an adoption form
exports.deleteAdoptionForm = async (req, res) => {
  try {
    const deletedForm = await AdoptionForm.findByIdAndDelete(req.params.id);
    if (!deletedForm) return res.status(404).json({ message: 'Form not found' });
    res.status(200).json({ message: 'Form deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get adoption forms by token
exports.getAdoptionFormsByToken = async (req, res) => {
  try {
    const forms = await AdoptionForm.find({ user: req.user._id }).populate('pet').populate('user');
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};