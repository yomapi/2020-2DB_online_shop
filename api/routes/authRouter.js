const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')
router.put('/signIn', authController.login)
module.exports = router;