const mongodb = require('mongoose');
const User = require('./userSchema');
const bcrypt = require('bcrypt')
const auth = require('../../authentication/auth')

exports.getUsers = (req, res) => {
  User.find()
  .then(data => res.status(200).json(data))
  .catch(err => res.status(500).json(err))
}

exports.getOneUser = (req, res) => {
  User.findById(req.params.id)
  .then(data => res.status(200).json(data))
  .catch(err => res.status(500).json(err))
}

exports.registerUser = (req, res) => {

  User.exists({ email: req.body.email }, (err, result) => {
    if(err) {
      return res.status(400).json(err)
    } else {

      if(result) {
        return res.status(400).json({
          statusCode: 400,
          status: false,
          message: 'Email address is already taken'
        })
      }
      else {
        const salt = bcrypt.genSaltSync(10);
        bcrypt.hash(req.body.password, salt, (err, hash) => {

          if(err) {
            return res.status(500).json({
              statusCode: 500,
              status: false,
              message: 'Failed when encrypting user password'
            })
          }
          const newUser = new User({
            firstname:    req.body.firstname,
            lastname:     req.body.lastname,
            email:        req.body.email,
            passwordHash: hash
          })
          newUser.save()
            .then(() => {
              res.status(201).json({
                statusCode: 201,
                status: true,
                message: 'User was created successfully'
              })
            })
            .catch(() => {
              res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'Failed to create user'
              })
            })
        })
      }
    }
  })
}

exports.loginUser = (req, res) => {
  User.findOne( { email: req.body.email })
    .then(user => {
      console.log(user)
      if(user === null) {
        return res.status(404).json({
          statusCode: 404,
          status: false,
          message: 'Incorrect email or password'
        })
      }
      try {
        bcrypt.compare(req.body.password, user.passwordHash, (err, result) => {
          if(err) {
            return res.status(400).json(err)
          }
          else {
            if(result) {
              return res.status(200).json({
                statusCode: 200,
                status: true,
                message: 'Authentication was successful',
                token: auth.generateToken(user)
              })
            }
            return res.status(401).json({
              statusCode: 401,
              status: false,
              message: 'Incorrect email or password'
            })
          }
        })
      }
      catch {
        return res.status(500).json({
          statusCode: 500,
          status: false,
          message: 'Unable to authenticate user. please contact the system administrator'
        })
      }
    })
}