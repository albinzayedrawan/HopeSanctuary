const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

router.get('/', petController.getAllPets); // Public
router.get('/:id', petController.getPetById); // Public
router.post('/', authMiddleware, adminMiddleware, petController.createPet); // Admin only
router.put('/:id', authMiddleware, adminMiddleware, petController.updatePet); // Admin only
router.delete('/:id', authMiddleware, adminMiddleware, petController.deletePet); // Admin only

module.exports = router;