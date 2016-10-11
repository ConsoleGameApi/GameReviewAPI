import searchGenreModel from '../../models/search/search.genre.model.js';

const searchGenreHelper = {};


searchGenreHelper.read = (params) => {
  return searchGenreModel.find(params);
};

export default searchGenreHelper;
