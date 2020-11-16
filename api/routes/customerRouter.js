const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController')

//router.post('/info', customerController.CustomerInfo)
//router.put('/customer/:userId', customerController.CustomerUpdate)
router.post('/signUp', customerController.CustomerCreate)
//router.post('/customer/delete', customerController.CustomerDelete)
module.exports = router;
