'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'users_reviews',
      'reviews_id',
      Sequelize.INTEGER,
    );

    await queryInterface.addConstraint('users_reviews', {
      fields: ['reviews_id'],
      type: 'foreign Key',
      name: 'users_reviews_reviews_id_fk',
      references: {
        table: 'reviews',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      'users_reviews',
      'users_reviews_reviews_id_fk',
    );
    await queryInterface.removeColumn('users_reviews', 'reviews_id');
  },
};
