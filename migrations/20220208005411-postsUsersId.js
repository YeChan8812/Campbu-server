'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('posts', 'users_id', Sequelize.INTEGER);

    await queryInterface.addConstraint('posts', {
      fields: ['users_id'],
      type: 'foreign Key',
      name: 'posts_users_id_fk',
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('posts', 'posts_users_id_fk');
    await queryInterface.removeColumn('posts', 'users_id');
  },
};
