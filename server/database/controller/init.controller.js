  // Endpoint reminder: /api/db/init
const data = require('../data/ign');
const gameController = require('./game.controller');
const genreController = require('./genre.controller');
const platformController = require('./platform.controller');
const game2GenreController = require('./game2Genre.controller');
const game2PlatformController = require('./game2Platform.controller');
const Promise = require('bluebird');

const dataFiltered = data.filter((game) => {
  return (game.genre.length > 1);
});

const gameData = dataFiltered.slice(0, 100);
const initializeDatabase = () => {
  const promiseArray = [];
  promiseArray.push(gameController.game.add(gameData[43]));
  promiseArray.push(genreController.genre.add(gameData[43]));
  promiseArray.push(platformController.platform.add(gameData[43]));
  Promise.all(promiseArray)
  .then((dataArray) => {
    var gameId;
    var genreId;
    var platformId;
    // console.log('returned dataArray: ', dataArray);
    (dataArray[0]) && (gameId = dataArray[0]);
    (dataArray[1]) && (genreId = dataArray[1]);
    (dataArray[2]) && (platformId = dataArray[2]);

    return game2GenreController.game2Genre.add(gameId, genreId)
    .then((result) => {
      console.log('inside init result of add game2Genre: ', result)
      return game2PlatformController.game2Platform.add(gameId, platformId)
      .then((result) => {
        console.log('inside init result of add games2Platforms: ', result);
      })
      .catch((error) => {
        console.log('error inside init inside add games2Platforms: ', error);
      });
    })
    .catch((error) => {
      console.log('error inside init inside add games2Genres: ', error);
    });
  })
  .catch((error) => {
    console.log('error inside promiseArray.all iniside init.controller: ', error);
  });
};

exports.init = {
  initializeDatabase,
};
