'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'users_reviews',
      'users_id',
      Sequelize.INTEGER,
    );

    await queryInterface.addConstraint('users_reviews', {
      fields: ['users_id'],
      type: 'foreign Key',
      name: 'users_reviews_users_id_fk',
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
      'users_reviews',
      'users_reviews_users_id_fk',
    );
    await queryInterface.removeColumn('users_reviews', 'users_id');
  },
};
