'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'chats',
      'reservation_id',
      Sequelize.INTEGER,
    );

    await queryInterface.addConstraint('chats', {
      fields: ['reservation_id'],
      type: 'foreign Key',
      name: 'chats_reservation_id_fk',
      references: {
        table: 'reservation',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('chats', 'chats_reservation_id_fk');
    await queryInterface.removeColumn('chats', 'reservation_id');
  },
};
