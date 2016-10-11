const searchGameModel = require('../../models/search/search.game.model.js');

const searchGameHelper = module.exports;


searchGameHelper.read = (params) => {
  return searchGameModel.find(params);
};

