  // Endpoint reminder: /api/db/init
const data = require('../data/ign');
const gameController = require('./game.controller.js');
const genreController = require('./genre.controller.js');
const platformController = require('./platform.controller.js');

const gameData = data.slice(0, 100);
const initializeDatabase = () => {
  // gameController.game.add(gameData[6]);
  // genreController.genre.add(gameData[11]);
  platformController.platform.add(gameData[11]);
};

exports.init = {
  initializeDatabase,
}
