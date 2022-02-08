'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('chats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      recipient_nickname: {
        type: Sequelize.STRING,
      },
      recipient_img: {
        type: Sequelize.STRING,
      },
      sender_nickname: {
        type: Sequelize.STRING,
      },
      sender_img: {
        type: Sequelize.STRING,
      },
      chat: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('chats');
  },
};
