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

const first50 = dataFiltered.slice(0,51)
const second50 = dataFiltered.slice(51,101)
const third50 = dataFiltered.slice(101, 151)
const fourth50 = dataFiltered.slice(151, 201)


const init = () => {
  for (var i = 0; i < first50.length; i++) {
    initializeDatabase(first50[i]);
  }
};

const gameData = dataFiltered.slice(0, 100);
const initializeDatabase = (item) => {
  var promiseArray = [];
  promiseArray.push(gameController.game.add(item));
  promiseArray.push(platformController.platform.add(item));
  promiseArray = promiseArray.concat(genreController.genre.add(item));
  Promise.all(promiseArray)
  .then((dataArray) => {
    console.log('******dataArray: ', dataArray)
    var gameId;
    var platformId;
    // console.log('returned dataArray: ', dataArray);
    (dataArray[0]) && (gameId = dataArray[0]);
    (dataArray[1]) && (platformId = dataArray[1]);
    var genreIdArray = dataArray.slice(2);
    return game2PlatformController.game2Platform.add(gameId, platformId)
    .then((result) => {
      console.log('inside init result of add game2Platform: ', result);
      return Promise.each(genreIdArray, (genreId) => {
        return game2GenreController.game2Genre.add(gameId, genreId)
      })
      .then((result) => {
        console.log('inside init result of add games2Genres: ', result);
      })
      .catch((error) => {
        console.log('error inside init inside add games2Genres: ', error);
      });
    })
    .catch((error) => {
      console.log('error inside init inside add games2Platform: ', error);
    });
  })
  .catch((error) => {
    console.log('error inside promiseArray.all iniside init.controller: ', error);
  });
};

exports.init = {
  init,
  initializeDatabase,
};
