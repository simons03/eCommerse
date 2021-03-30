const mongodb = require('mongoose')

const userSchema = mongodb.Schema({

  // _id: mongodb.Schema.Types.ObjectId,
  firstname: {type: String, required: true},
  lastname: {type: String, required: true},
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  logedin: {type: Boolean, default: false},
  admin: {type: Boolean, default: false},

  created: { type: Date, default: Date.now() }

})

module.exports = mongodb.model('user', userSchema);