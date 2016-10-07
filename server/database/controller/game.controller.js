const addGameModel = require('../model/add.game.model.js');
const Promise = require('bluebird');


const retrieve = () => {};

const add = (game) => {
  console.log('we are inside game.controller.js inside add: ');
  return addGameModel.isGameExists(game)
    .then((exists) => {
      console.log('exists inside isGameExists inside game.controller: ', exists);
      if (exists === false) {
        return addGameModel.add(game)
        .then((result) => {
          return result
        })
        .catch((error) => {
        console.log('error inside game.controller inside add: ', error);
        });
      } else {
        return 'Game Already Exists';
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

