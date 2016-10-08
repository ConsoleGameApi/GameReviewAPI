const searchGameModel = require('../../models/search/search.game.model.js');

const searchGameHelper = module.exports

searchGameHelper.read = (params) => {
  console.log('inside searchGameHelper params are: ', params)
  if (params.score) {
    return searchGameModel.score(params);
  } else if (params.score_range) {
    return searchGameModel.score_range(params);
  } else if (params.title) {
    return searchGameModel.title(params);
  }
};

