'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Post }) {
      // define association here
      // Post
      this.hasMany(Post, { foreignKey: 'userId', as: 'posts' })
    }

    toJSON(){
      return { ...this.get(), id: undefined }
    }
  };
  User.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'User must have a firstName' },
        notEmpty: { msg: 'firstName must not be empty' }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'User must have a lastName' },
        notEmpty: { msg: 'lastName must not be empty' }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'User must have a email' },
        notEmpty: { msg: 'email must not be empty' },
        isEmail: { msg: 'Must be a valid email address' }
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      isAdmin: DataTypes.BOOLEAN,
      validate: {
        notNull: { msg: 'User must have a role' },
        notEmpty: { msg: 'role must not be empty' }
      }
    }
  }, {
    sequelize,
    tableName: 'users',
    modelName: 'User',
  });
  return User;
};