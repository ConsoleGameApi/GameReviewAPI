const addGame2PlatformModel = require('../model/add.game2Platform.model');


const add = (gameId, platformId) => {
  // console.log('we are inside game2Platform.controller.js inside add: ');
  return addGame2PlatformModel.add(gameId, platformId)
    .then((result) => {
      // console.log('result inside addGame2Platform controller: ', result);
      return result;
    })
    .catch((error) => {
      console.log('error inside addGame2Platform controller: ', error);
      return error;
    });
};

exports.game2Platform = {
  add,
};
