'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes,
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// associations
const { chats, likes, posts, reservation, reviews, users_reviews, users } =
  sequelize.models;
users.hasMany(chats);
chats.belongsTo(users);
reservation.hasMany(chats);
chats.belongsTo(reservation);
users.hasMany(likes);
likes.belongsTo(users);
posts.hasMany(likes);
likes.belongsTo(posts);
users.hasMany(posts);
posts.belongsTo(users);
users.hasMany(reservation);
reservation.belongsTo(users);
posts.hasMany(reservation);
reservation.belongsTo(posts);
users.hasMany(users_reviews);
users_reviews.belongsTo(users);
reviews.hasMany(users_reviews);
users_reviews.belongsTo(reviews);

module.exports = db;
