'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  chats.init(
    {
      recipient_nickname: DataTypes.STRING,
      recipient_img: DataTypes.STRING,
      sender_nickname: DataTypes.STRING,
      sender_img: DataTypes.STRING,
      chat: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'chats',
    },
  );
  return chats;
};
