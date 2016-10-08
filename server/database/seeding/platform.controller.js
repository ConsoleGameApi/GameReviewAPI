const addPlatformModel = require('../model/add.platform.model.js');

const add = (platform) => {
  // console.log('we are inside platform.controller.js inside add: ');
  return addPlatformModel.isPlatformExists(platform)
    .then((id) => {
      // console.log('id inside isplatformExists inside platform.controller: ', id);
      if (id === -1) {
        return addPlatformModel.add(platform)
        .then((result) => {
          return result
        })
        .catch((error) => {
        console.log('error inside platform.controller inside add: ', error);
        });
      } else {
        return id;
      }
    })
    .catch((error) => {
      console.log('error inside platform.controller inside isGameExists: ', error);
      return error;
    });
};




exports.platform = {
  add,
};
