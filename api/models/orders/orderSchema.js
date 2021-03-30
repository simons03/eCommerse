const mongodb = require('mongoose')

const orderSchema = mongodb.Schema({

  // _id: mongodb.Schema.Types.ObjectId,
  userId: {type: String, required: true},
  email: {type: String, required: true},
  // cart: [
  //   {title: String, quantity: Number, price: Number},
  // ],
  cart: {type: Array},
  totalprice: {type: Number},

  createdAt: { type: Date, default: Date.now() }

})

module.exports = mongodb.model('order', orderSchema);