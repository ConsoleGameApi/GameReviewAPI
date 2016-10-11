const addGenreModel = require('../model/add.genre.model.js');
const Promise = require('bluebird');

const add = (genre) => {
  // console.log('genre inside genre.controller.js inside add: ', genre);
  const genreArray = genre.genre.split(', ')
  return genreArray.map((g) => {
    return addGenreModel.isGenreExists(g)
    .then((id) => {
      console.log('id inside genre.controller: ', id);
      if (id === -1) {
        return addGenreModel.add(g)
        .then((idAdded) => {
          return idAdded;
        })
        .catch((error) => {
        console.log('error inside genre.controller inside add: ', error);
        });
      } else {
        return id;
      }
    })
    .catch((error) => {
      console.log('error inside genre.controller inside isGameExists: ', error);
      return error;
    });
  });
};




exports.genre = {
  add,
};

