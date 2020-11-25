const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')
const { memberOnly, sellerOnly } =  require ('../middlewares/auth')

router.get('/products', productController.ProductList)
router.post('/products', sellerOnly, productController.ProductCreate)

module.exports = router;