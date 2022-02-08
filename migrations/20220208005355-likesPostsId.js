'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('likes', 'posts_id', Sequelize.INTEGER);

    await queryInterface.addConstraint('likes', {
      fields: ['posts_id'],
      type: 'foreign Key',
      name: 'likes_posts_id_fk',
      references: {
        table: 'posts',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('likes', 'likes_posts_id_fk');
    await queryInterface.removeColumn('likes', 'posts_id');
  },
};
