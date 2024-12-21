const express = require('express');
const router = express.Router();
const contactFormController = require('../controllers/contactFormController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

router.get('/', authMiddleware, adminMiddleware, contactFormController.getAllContactForms); // Admin only
router.get('/:id', authMiddleware, contactFormController.getContactFormById); // Authenticated users
router.post('/', contactFormController.createContactForm); // Public
router.put('/:id', authMiddleware, adminMiddleware, contactFormController.updateContactForm); // Admin only
router.delete('/:id', authMiddleware, adminMiddleware, contactFormController.deleteContactForm); // Admin only

module.exports = router;