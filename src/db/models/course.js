'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate(models) {
      Course.belongsTo(models.Category, {
        foreignKey: 'category_id'
      });
      Course.belongsTo(models.Person, {
        foreignKey: 'teacher_id'
      });
      Course.hasMany(models.Registration, {
        foreignKey: 'course_id'
      });
    }
  }
  Course.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    initial_date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Course',
    tableName: 'courses',
    paranoid: true
  });
  return Course;
};
