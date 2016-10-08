const addGame2GenreModel = require('../model/add.game2Genre.model');


const add = (gameId, genreId) => {
  return addGame2GenreModel.isGame2GenreExists(gameId, genreId)
    .then((id) => {
      console.log('id inside isGames2GenreExists inside genre.controller: ', id);
      if (id === -1) {
        return addGame2GenreModel.add(gameId, genreId)
        .then((result) => {
          return result;
        })
        .catch((error) => {
        console.log('error inside games2Genres.controller inside add: ', error);
        });
      } else {
        return id;
      }
    })
    .catch((error) => {
      console.log('error inside games2Genres.controller inside isGameExists: ', error);
      return error;
    });
};

exports.game2Genre = {
  add,
};
