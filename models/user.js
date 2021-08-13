'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    name:{
      type: DataTypes.STRING,
      allowNull:false
    },
    lastname: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    email: {
      type:DataTypes.STRING,
      allowNull:false
    },
    password: DataTypes.VIRTUAL,
    password_hash: {
      type: DataTypes.STRING,
      allowNull:false
    },
    date: DataTypes.DATE,
    rol: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};