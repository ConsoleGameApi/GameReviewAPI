const addPlatformModel = require('../model/add.platform.model.js');


const retrieve = () => {};

const add = (platform) => {
  console.log('we are inside platform.controller.js inside add: ');
  return addPlatformModel.isPlatformExists(platform)
    .then((exists) => {
      console.log('exists inside isplatformExists inside platform.controller: ', exists);
      if (exists === false) {
        return addPlatformModel.add(platform)
        .then((result) => {
          return result
        })
        .catch((error) => {
        console.log('error inside platform.controller inside add: ', error);
        });
      } else {
        return 'platform Already Exists';
      }
    })
    .catch((error) => {
      console.log('error inside platform.controller inside isGameExists: ', error);
      return error;
    });
};




exports.platform = {
  retrieve,
  add,
};
