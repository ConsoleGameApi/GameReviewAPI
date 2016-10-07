const addGameModel = require('../model/add.game.model.js');
const Promise = require('bluebird');


const retrieve = () => {}

const add = (game) => {
  console.log('we are inside game.controller.js inside add: ')
  return new Promise((resolve, reject) => {
    addGameModel.add(game)
  })
  .then((result) => {
    console.log('result inside game.controller inside add: ', result);
  })
  .catch((error) => {
    console.log('error inside game.controller inside add: ', error);
  })
}



exports.game = {
  retrieve,
  add
}

