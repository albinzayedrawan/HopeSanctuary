const express = require('express');
const router = express.Router();
const adoptionFormController = require('../controllers/adoptionFormController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

router.get('/', authMiddleware, adminMiddleware, adoptionFormController.getAllAdoptionForms); // Admin only
router.get('/:id', authMiddleware, adoptionFormController.getAdoptionFormById); // Authenticated users
router.post('/', authMiddleware, adoptionFormController.createAdoptionForm); // Authenticated users
router.put('/:id', authMiddleware, adminMiddleware, adoptionFormController.updateAdoptionForm); // Admin only
router.delete('/:id', authMiddleware, adminMiddleware, adoptionFormController.deleteAdoptionForm); // Admin only

module.exports = router;