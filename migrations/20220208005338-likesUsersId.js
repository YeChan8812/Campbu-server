'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('likes', 'users_id', Sequelize.INTEGER);

    await queryInterface.addConstraint('likes', {
      fields: ['users_id'],
      type: 'foreign Key',
      name: 'likes_users_id_fk',
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('likes', 'likes_users_id_fk');
    await queryInterface.removeColumn('likes', 'users_id');
  },
};
