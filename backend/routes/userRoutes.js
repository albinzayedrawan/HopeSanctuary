const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

router.get('/', authMiddleware, adminMiddleware, userController.getAllUsers); // Admin only
router.get('/:id', authMiddleware, userController.getUserById); // Authenticated users
router.post('/', userController.createUser); // Public
router.post('/signup', userController.createUser);
router.post('/login', userController.loginUser);
router.put('/:id', authMiddleware, userController.updateUser); // Authenticated users
router.delete('/:id', authMiddleware, adminMiddleware, userController.deleteUser); // Admin only

module.exports = router;