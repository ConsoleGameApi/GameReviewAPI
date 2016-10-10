const searchGameModel = require('../../models/search/search.game.model.js');

const searchGameHelper = module.exports

searchGameHelper.read = (params) => {
  console.log('inside searchGameHelper params are: ', params)
  if (params.score || params.score_range) {
    return searchGameHelper.scores(params);
  } else if (params.title) {
    return searchGameModel.title(params);
  }
};


searchGameHelper.scores = (params) => {
  if (params.score) {
    if (params.release_year) {
      return searchGameModel.score_release_year(params);
    }
    return searchGameModel.score(params);
  } else if (params.score_range) {
    if (params.release_year) {
      return searchGameModel.score_release_year_range(params);
    }
    return searchGameModel.score_range(params);
  }
};
