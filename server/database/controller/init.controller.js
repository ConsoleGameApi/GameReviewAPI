  // Endpoint reminder: /api/db/init
const data = require('../data/ign');
const gameController = require('./game.controller.js');
const genreController = require('./genre.controller.js');
const platformController = require('./platform.controller.js');

const gameData = data.slice(0, 100);
const initializeDatabase = () => {
  // gameController.game.add(gameData[6]);
  genreController.genre.add(gameData[11]);

  




  //platform.add below returns a promise
  


  // platformController.platform.add(gameData[12])
  // .then((resultOfInit) => {
  //   console.log('resultOfInit: ', resultOfInit)
  // })



  //add join tables stuff under
};

exports.init = {
  initializeDatabase,
};
