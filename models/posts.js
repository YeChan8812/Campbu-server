'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  posts.init({
    category: DataTypes.STRING,
    deposit: DataTypes.NUMBER,
    rental_fee: DataTypes.NUMBER,
    unavailable_dates: DataTypes.ARRAY,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    longitude: DataTypes.STRING,
    latitude: DataTypes.STRING,
    address: DataTypes.STRING,
    img_urls: DataTypes.ARRAY
  }, {
    sequelize,
    modelName: 'posts',
  });
  return posts;
};