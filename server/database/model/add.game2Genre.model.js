const db = require('../db');

const addGame2GenresModel = module.exports;

addGame2GenresModel.isGame2GenreExists = (gameId, genreId) => {
  // console.log('inside addGameGames2Genres check params are: ', gameId, genreId);
  return db('Games2Genres').where({
    game_id: gameId,
    genre_id: genreId,
  }).select('id')
  .then((result) => {
    if (result.length) {
      // console.log('Game2Genre entry already exists: ', result);
      return result[0].id;
    }
    // console.log('Game2Genre entry does not exist at', result);
    return -1;
  });
};




addGame2GenresModel.add = (gameId, genreId) => {
  return db('Games2Genres').insert({
    game_id: gameId,
    genre_id: genreId,
  })
  .then((row) => {
    // console.log('inside addGame2GenresModel row is: ', row);
    return row[0];
  });
};
