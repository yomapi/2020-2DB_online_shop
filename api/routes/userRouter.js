const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const { memberOnly } =  require ('../middlewares/auth')

router.get('/user/:id', memberOnly, userController.UserInfo)
router.post('/signUp', userController.UserCreate)
router.put('/user/:id', memberOnly, userController.UserUpdate)
router.delete('/user/:id', memberOnly, userController.UserDelete)
module.exports = router;
