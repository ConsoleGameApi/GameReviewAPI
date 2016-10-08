const addGameModel = require('../model/add.game.model.js');

const retrieve = () => {};

const add = (game) => {
  console.log('we are inside game.controller.js inside add: ');
  return addGameModel.isGameExists(game)
    .then((id) => {
      console.log('id inside isGameExists inside game.controller: ', id);
      if (id === -1) {
        return addGameModel.add(game)
        .then((result) => {
          return result;
        })
        .catch((error) => {
        console.log('error inside game.controller inside add: ', error);
        });
      } else {
        return id;
      }
    })
    .catch((error) => {
      console.log('error inside game.controller inside isGameExists: ', error);
      return error;
    });
};


exports.game = {
  retrieve,
  add,
};

