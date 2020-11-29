const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')
const { memberOnly, sellerOnly } =  require ('../middlewares/auth')

router.get('/products', productController.ProductList)
router.post('/products', sellerOnly, productController.ProductCreate)
router.get('/products/name/:name', productController.ProductSearchByName)
router.get('/products/tag/:tag', productController.ProductSearchByTag)
router.get('/products/provider/:provider', productController.ProductSearchBySellerId)
router.get('/products/:productId', productController.ProductInfo)
router.delete('/products/:productId',sellerOnly, productController.ProductDelete)
router.put('/products/:productId',sellerOnly, productController.ProductUpdate)

module.exports = router;