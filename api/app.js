const express = require('express');
const app = express();

//  Importera controllers
const productController = require('./controllers/productController');
const usersController = require('./controllers/userController');
const orderController = require('./controllers/orderController');


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Content-Type, Accept, Autorization, Origin, X-Requested-With")
  if(req.method === 'OPTIONS') {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT,PATCH, DELETE")
  }
  next()
})

// för att vi ska kunna använda JSON
app.use(express.urlencoded({ extended: false}));
app.use(express.json());


// Controllers
app.use('/api/product', productController);
app.use('/api/users', usersController);
app.use('/api/orders', orderController);

module.exports = app;

