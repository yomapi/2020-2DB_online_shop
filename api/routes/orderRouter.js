const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController')
const { memberOnly } =  require ('../middlewares/auth')

router.post('/orders', memberOnly, orderController.OrderCreate)
router.get('/user/:userId/orders/:orderId', memberOnly, orderController.OrderInfo)
router.get('/user/:userId/orders/:orderId', memberOnly, orderController.OrderInfo)
router.put('/user/:userId/orders/:orderId',memberOnly, orderController.OrderDelete)
router.get('/user/:userId/orders',memberOnly, orderController.OrderList)
router.get('/user/:userId/orders/status/:status',memberOnly, orderController.OrderSearchByStatus)


module.exports = router;
