const addGames2PlatformsModel = require('../model/add.games2Platforms.model');


const add = (gameId, platformId) => {
  console.log('we are inside games2Platforms.controller.js inside add: ');
  return addGames2PlatformsModel.add(gameId, platformId)
    .then((result) => {
      console.log('result inside addGames2Platforms controller: ', result);
      return result;
    })
    .catch((error) => {
      console.log('error inside addGames2Platforms controller: ', error);
      return error;
    });
};

exports.games2Platforms = {
  add,
};
