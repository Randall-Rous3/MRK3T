'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    static associate(models) {
      Department.hasMany(models.User, { 
        as: 'vendor',
        foreignKey: 'departmentId'
      });
    }
  }
  Department.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Department',
    tableName: 'departments'
  });
  return Department;
};