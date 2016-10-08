const addGames2GenresModel = require('../model/add.games2Genres.model');


const add = (gameId, genreId) => {
  // console.log('we are inside games2Genres.controller.js inside add: ');
  return addGames2GenresModel.add(gameId, genreId)
    .then((result) => {
      // console.log('result inside addGames2Genres controller: ', result);
      return result;
    })
    .catch((error) => {
      console.log('error inside addGames2Genres controller: ', error);
      return error;
    });
};

exports.games2Genres = {
  add,
};
