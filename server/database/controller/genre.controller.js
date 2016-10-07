const addGenreModel = require('../model/add.genre.model.js');


const retrieve = () => {};

const add = (genre) => {
  console.log('we are inside genre.controller.js inside add: ');
  return addGenreModel.isGenreExists(genre)
    .then((exists) => {
      console.log('exists inside isgenreExists inside genre.controller: ', exists);
      if (exists === false) {
        return addGenreModel.add(genre)
        .then((result) => {
          return result
        })
        .catch((error) => {
        console.log('error inside genre.controller inside add: ', error);
        });
      } else {
        return 'genre Already Exists';
      }
    })
    .catch((error) => {
      console.log('error inside genre.controller inside isGameExists: ', error);
      return error;
    });
};



exports.genre = {
  retrieve,
  add,
};

