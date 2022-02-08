'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  reservation.init({
    reservation_dates: DataTypes.ARRAY,
    reservation_status: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'reservation',
  });
  return reservation;
};