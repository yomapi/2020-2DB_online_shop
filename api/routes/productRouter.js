const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')
const { memberOnly } =  require ('../middlewares/auth')

router.get('/products', productController.ProductList)


module.exports = router;