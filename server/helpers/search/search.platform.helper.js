import searchPlatformModel from '../../models/search/search.platform.model.js';

const searchPlatformHelper = {};


searchPlatformHelper.read = (params) => {
  return searchPlatformModel.find(params);
};

export default searchPlatformHelper;
