const addGenreModel = require('../model/add.genre.model.js');


const retrieve = () => {};

const add = (genre) => {
  console.log('we are inside genre.controller.js inside add: ');
  return addGenreModel.isGenreExists(genre)
    .then((id) => {
      console.log('id inside isgenreExists inside genre.controller: ', id);
      if (id === -1) {
        return addGenreModel.add(genre)
        .then((result) => {
          return result;
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
};



exports.genre = {
  retrieve,
  add,
};

