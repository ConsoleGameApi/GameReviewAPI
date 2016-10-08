const db = require('../db');

const addGame2PlatformModel = module.exports;

addGame2PlatformModel.add = (gameId, platformId) => {
  return db('Games2Platforms').insert({
    game_id: gameId,
    platform_id: platformId,
  })
  .then((row) => {
    // console.log('inside addGame2PlatformModel row is: ', row);
    return row[0];
  });
};
