const db = require('../db');

const addGame2PlatformsModel = module.exports;

addGame2PlatformsModel.add = (gameId, platformId) => {
  return db('Games2Platforms').insert({
    game_id: gameId,
    platform_id: platformId,
  })
  .then((row) => {
    console.log('inside addGame2PlatformsModel row is: ', row);
    return row[0];
  });
};
