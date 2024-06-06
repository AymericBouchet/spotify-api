const express = require('express');
const router = express.Router();
const userController = require('./userController');

router.get('/users', userController.getAllUser);
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;