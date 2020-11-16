const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const { memberOnly } =  require ('../middlewares/auth')

router.get('/user/:id', memberOnly, userController.UserInfo)
router.post('/signUp', userController.UserCreate)

module.exports = router;
