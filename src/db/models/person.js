'use strict';
const {
  Model
} = require('sequelize');
const cpfValidator = require('../../utils/cpfValidator');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    static associate(models) {
      Person.hasMany(models.Registration, {
        foreignKey: 'student_id'
      });
      Person.hasMany(models.Course, {
        foreignKey: 'teacher_id'
      });
    }
  }
  Person.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3-30],
          msg: 'The name must be between 3 and 30 characters'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'The email is invalid'
        }
      }
    },
    cpf: {
      type: DataTypes.STRING,
      validate: {
        isCpfValid: (cpf) => {
          if(!cpfValidator(cpf)) throw new Error('Cpf validation failed...');
        }
      }
    },
    active: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Person',
    tableName: 'people',
    paranoid: true,
    defaultScope: {
      where: {
        active: true
      }
    },
    scopes: {
      allPeople: {
        where: {}
      }
    }
  });
  return Person;
};
