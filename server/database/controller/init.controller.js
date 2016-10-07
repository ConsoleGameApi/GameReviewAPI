  // Endpoint reminder: /api/db/init
const data = require('../data/ign');
const gameController = require('./game.controller.js');
const genreController = require('./genre.controller.js');
const platformController = require('./platform.controller.js');

const gameData = data.slice(0, 5);
const initializeDatabase = () => {
  console.log('we are initializing the database');
  // gameController.game.add(gameData[0]);
  // genreController.genre.add(gameData[0]);
  platformController.platform.add(gameData[0]);
};

exports.init = {
  initializeDatabase,
}