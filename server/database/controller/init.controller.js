  // Endpoint reminder: /api/db/init
const data = require('../data/ign');
const gameController = require('./game.controller.js');

const gameData = data.slice(0, 5);
const initializeDatabase = () => {
  console.log('we are initializing the database');
  gameController.game.add(gameData[0]);
};

exports.init = {
  initializeDatabase,
}