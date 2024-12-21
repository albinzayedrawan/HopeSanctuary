const ContactForm = require('../models/contactFormModel');

// Get all contact forms
exports.getAllContactForms = async (req, res) => {
  try {
    const forms = await ContactForm.find();
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get contact form by ID
exports.getContactFormById = async (req, res) => {
  try {
    const form = await ContactForm.findById(req.params.id);
    if (!form) return res.status(404).json({ message: 'Form not found' });
    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new contact form
exports.createContactForm = async (req, res) => {
  const form = new ContactForm(req.body);
  try {
    const newForm = await form.save();
    res.status(201).json(newForm);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a contact form
exports.updateContactForm = async (req, res) => {
  try {
    const updatedForm = await ContactForm.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedForm) return res.status(404).json({ message: 'Form not found' });
    res.status(200).json(updatedForm);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a contact form
exports.deleteContactForm = async (req, res) => {
  try {
    const deletedForm = await ContactForm.findByIdAndDelete(req.params.id);
    if (!deletedForm) return res.status(404).json({ message: 'Form not found' });
    res.status(200).json({ message: 'Form deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};