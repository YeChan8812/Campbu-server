'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('chats', 'users_id', Sequelize.INTEGER);

    await queryInterface.addConstraint('chats', {
      fields: ['users_id'],
      type: 'foreign Key',
      name: 'chats_users_id_fk',
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('chats', 'chats_users_id_fk');
    await queryInterface.removeColumn('chats', 'users_id');
  },
};
