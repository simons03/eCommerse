const router = require('express').Router();
// const express = require('express');
// const router = express.Router();
const userModel = require('../models/users/userModel');
// const auth = require('../authentication/auth')


router.get('/', userModel.getUsers);
router.get('/:id', userModel.getOneUser);

router.post('/register', userModel.registerUser);
router.post('/login', userModel.loginUser);

// router.patch('/:id', userModel.updateUser)

module.exports = router;