'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users_reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users_reviews.init({
    count: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'users_reviews',
  });
  return users_reviews;
};