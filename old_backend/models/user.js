// const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');

// const userSchema = mongoose.Schema({
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true, unique: true }
// });

// userSchema.plugin(uniqueValidator);

// module.exports = mongoose.model('User', userSchema );

const { sequelizer } = require('json-sequelize');

const userSchema = {
    title: 'User Schema',
    unique: ['email', 'password'],
    required: ['email', 'password'],
    properties: {
      id: { type: 'integer' },
      email: { type: 'string', format: 'email' },
      password: { type: 'string', maxLength: 255 }
    }
  }
  
  const model = sequelizer(userSchema)
  
  console.log(model)