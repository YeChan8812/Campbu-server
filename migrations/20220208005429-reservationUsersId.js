'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'reservation',
      'users_id',
      Sequelize.INTEGER,
    );

    await queryInterface.addConstraint('reservation', {
      fields: ['users_id'],
      type: 'foreign Key',
      name: 'reservation_users_id_fk',
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      'reservation',
      'reservation_users_id_fk',
    );
    await queryInterface.removeColumn('reservation', 'users_id');
  },
};
