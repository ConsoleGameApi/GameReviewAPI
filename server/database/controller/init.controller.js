  // Endpoint reminder: /api/db/init
const data = require('../data/ign');
const gameController = require('./game.controller.js');
const genreController = require('./genre.controller.js');
const platformController = require('./platform.controller.js');

const gameData = data.slice(0, 10);
const initializeDatabase = () => {
  gameController.game.add(gameData[6]);
  // genreController.genre.add(gameData[0]);
  // platformController.platform.add(gameData[0]);
};

exports.init = {
  initializeDatabase,
}
