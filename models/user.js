'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
        User.hasMany(models.Product, { 
          as: 'productOwned',
          foreignKey: 'userId'
        });
        User.belongsTo(models.Department, {
          as: 'vendor',
          foreignKey: 'departmentId'
        });
      }
    }
  User.init({
    name: DataTypes.STRING,
    departmentId: DataTypes.INTEGER,
    address: DataTypes.STRING,
    image: DataTypes.STRING,
    contact_info: DataTypes.STRING,
    seasons: DataTypes.STRING,
    hours: DataTypes.INTEGER,
    delivery_service: DataTypes.BOOLEAN,
    departmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'departments',
        key: 'id'
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    passwordDigest: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, 
  {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};