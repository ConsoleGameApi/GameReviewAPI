const db = require('../db');

const addGame2GenresModel = module.exports;

addGame2GenresModel.add = (gameId, genreId) => {
  return db('Games2Genres').insert({
    game_id: gameId,
    genre_id: genreId,
  })
  .then((row) => {
    console.log('inside addGame2GenresModel row is: ', row);
    return row[0];
  });
};
