const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController')
const { memberOnly, sellerOnly } =  require ('../middlewares/auth')

router.post('/orders', memberOnly, orderController.OrderCreate)
router.get('/user/:userId/orders/:orderId', memberOnly, orderController.OrderInfo)
router.put('/user/:userId/orders/:orderId',memberOnly, orderController.OrderDelete)
router.put('/user/:userId/orders/:orderId',memberOnly, orderController.OrderDelete)

router.get('/user/:userId/orders',memberOnly, orderController.OrderList)
router.get('/user/:userId/orders/status/:status',memberOnly, orderController.OrderSearchByStatus)
router.get('/user/:userId/orders/tag/:tag',memberOnly, orderController.OrderSearchByTags)
router.get('/user/:userId/orders/name/:name',memberOnly, orderController.OrderSearchByName)

router.get('/seller/:userId/orders/:orderId', sellerOnly, orderController.SellerOrderInfo)
router.put('/seller/:userId/orders/:orderId',sellerOnly, orderController.SellerOrderDelete)
router.get('/seller/:userId/orders',sellerOnly, orderController.SellerOrderList)
router.get('/seller/:userId/orders/status/:status',sellerOnly, orderController.SellerOrderSearchByStatus)
router.get('/seller/:userId/orders/tag/:tag',sellerOnly, orderController.SellerOrderSearchByTags)
router.get('/seller/:userId/orders/name/:name',sellerOnly, orderController.SellerOrderSearchByName)
router.put('/seller/:userId/orders/:orderId/status/:status',sellerOnly, orderController.SellerOrderStatus)

module.exports = router;
