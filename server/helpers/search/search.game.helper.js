const searchGameModel = require('../../models/search/search.game.model.js');

const searchGameHelper = module.exports;


searchGameHelper.read = (params) => {
  console.log('params inside search game helper: ', params)
  return searchGameModel.find(params);
};

