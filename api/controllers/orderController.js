const router = require('express').Router();
// const express = require('express');
// const router = express.Router();
const orderModel = require('../models/orders/orderModel');
// const auth = require('../authentication/auth')

router.get('/', orderModel.getOrders);
router.get('/:id', orderModel.getOneUserOrder);


router.post('/', orderModel.saveOrder);


module.exports = router;
