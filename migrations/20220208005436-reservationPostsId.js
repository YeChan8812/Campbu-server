'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'reservation',
      'posts_id',
      Sequelize.INTEGER,
    );

    await queryInterface.addConstraint('reservation', {
      fields: ['posts_id'],
      type: 'foreign Key',
      name: 'reservation_posts_id_fk',
      references: {
        table: 'posts',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      'reservation',
      'reservation_posts_id_fk',
    );
    await queryInterface.removeColumn('reservation', 'posts_id');
  },
};
