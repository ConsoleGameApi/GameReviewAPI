  // Endpoint reminder: /api/db/init
const data = require('../data/ign');
const gameController = require('./game.controller.js');
const genreController = require('./genre.controller.js');
const platformController = require('./platform.controller.js');
const Promise = require('bluebird');

const dataFiltered = data.filter((game) => {
  return (game.genre.length > 1)
});

const gameData = dataFiltered.slice(0, 100);
const initializeDatabase = () => {

 
  const promiseArray = []
  promiseArray.push(gameController.game.add(gameData[20]));
  promiseArray.push(genreController.genre.add(gameData[20]));
  promiseArray.push(platformController.platform.add(gameData[20]));

  Promise.all(promiseArray)
  .then((dataArray) => {
    console.log('returned dataArray: ', dataArray)
    console.log('game id: ', dataArray[0])
    console.log('genre id: ', dataArray[1])
    console.log('platform id: ', dataArray[2])
  });




  //add join tables stuff under
};

exports.init = {
  initializeDatabase,
};
