const mongodb = require('mongoose');
const Order = require('./orderSchema');

exports.getOrders = (req, res) => {
  Order.find()
  .then(data => res.status(200).json(data))
  .catch(err => res.status(500).json(err))
}

exports.getOneUserOrder = (req, res) => {
  Order.findById(req.params.id)
  .then(data => res.status(200).json(data))
  .catch(err => res.status(500).json(err))
}

exports.saveOrder = (req, res) => {
  const order = new Order({
    // _id: new mongodb.Types.ObjectId,
    userId: req.body.userId,
    email: req.body.email,
    cart: req.body.cart,
    
    totalprice: req.body.totalprice
  
  })
  order.save()
  .then(() => {
    res.status(201).json({
      statusCode: 201,
      status: true,
      message: 'Order created successfully'
    })
  })
  .catch(() => {
    res.status(500).json({
      statusCode: 500,
      status: false,
      message: 'Failed to create Order'
    })
  })
}