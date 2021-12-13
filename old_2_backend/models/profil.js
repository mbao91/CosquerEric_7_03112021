const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize("rsg", "ericcosquer$", "Determination2021.", {
  dialect: "mysql",
  host: "localhost"
});

// const profilSchema = {
//     title: 'Profil Schema',
//     unique: ['email'],
//     required: ['firstname', 'lastname', 'email', 'role'],
//     properties: {
//       id: { type: INTEGER },
//       active: { type: Boolean },
//       firstname: { type: String, maxLength: 255 },
//       lastname: { type: String, maxLength: 255 },
//       email: { type: String, format: 'email', maxLength: 255 },
//       role: { type: String, enum: ['admin', 'staff'], default: 'staff' },
//       createdAt: { type: String, format: 'date-time' },
//       modifiedAt: { type: String, format: 'date-time' }
//     }
//   }
  
//   const model = Sequelize(profilSchema)
  
//   console.log(model)

// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('');

const User = Sequelize.define('User', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  active: {
    type: Boolean,
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    maxLength: 255
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    maxLength: 255
    // allowNull defaults to true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    enum: ['admin', 'staff'], default: 'staff',
  },

}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User === Sequelize.models.User); // true