const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')
const { memberOnly, sellerOnly } =  require ('../middlewares/auth')

router.get('/products', productController.ProductList)
router.post('/products', sellerOnly, productController.ProductCreate)
router.get('/products/name/:name', productController.ProductSearchByName)
router.get('/products/tag/:tag', productController.ProductSearchByTag)

module.exports = router;