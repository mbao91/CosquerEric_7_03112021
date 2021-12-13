const { Sequelize, INTEGER, DataTypes } = require('sequelize');
const sequelize = new Sequelize("rsg", "ericcosquer$", "Determination2021.", {
  dialect: "mysql",
  host: "localhost"
});
// const userSchema = {
//     title: 'User Schema',
//     unique: ['email', 'password'],
//     required: ['email', 'password'],
//     properties: {
//       id: { type: INTEGER },
//       email: { type: String, format: 'email' },
//       password: { type: String, maxLength: 255 }
//     }
//   }
  
//   const model = Sequelize(userSchema)
  
//   console.log(model)

const Profil = sequelize.define('Profil', {
  // Model attributes are defined here
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true
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
console.log(Profil === sequelize.models.Profil); // true