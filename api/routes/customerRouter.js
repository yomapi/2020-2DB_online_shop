const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController')

router.post('/customer/info', customerController.CustomerInfo)
router.post('/customer/update', customerController.CustomerUpdate)
router.post('/customer/create', customerController.CustomerCreate)
router.post('/customer/delete', customerController.CustomerDelete)
module.exports = router;
