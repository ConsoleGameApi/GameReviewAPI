  // Endpoint reminder: /api/db/init
const data = require('../data/ign');
const gameController = require('./game.controller.js');
const genreController = require('./genre.controller.js');
const platformController = require('./platform.controller.js');

const dataFiltered = data.filter((game) => {
  return (game.genre.length > 1)
});

const gameData = dataFiltered.slice(0, 100);
const initializeDatabase = () => {
  gameController.game.add(gameData[15])
  .then((resultOfInit) => {
    console.log('resultOfInit: ', resultOfInit)
  });
 



  // genre.add below returns a promise
  // genreController.genre.add(gameData[13])
  // .then((resultOfInit) => {
  //   console.log('resultOfInit: ', resultOfInit)
  // });

  




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
