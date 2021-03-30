const router = require('express').Router();
// const express = require('express');
// const router = express.Router();
const productModel = require('../models/products/productModel');
// const auth = require('../authentication/auth')

router.get('/', productModel.getProduct);
router.get('/:id', productModel.getOneProduct);

router.post('/', productModel.saveProduct);

router.patch('/:id', productModel.updateProduct);

router.delete('/:id', productModel.deleteProduct);

module.exports = router;
