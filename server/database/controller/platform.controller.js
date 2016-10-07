const addPlatformModel = require('../model/add.platform.model.js');
const Promise = require('bluebird');


const retrieve = () => {};

const add = (platform) => {
  console.log('we are inside platform.controller.js inside add: ');
  return new Promise((resolve, reject) => {
    addPlatformModel.add(platform)
    .then((result) => {
      console.log('inside platform.controller');
      console.log('result inside platform.controller inside add: ', result);
      return resolve(result);
    })
    .catch((error) => {
      console.log('error inside platform.controller inside add: ', error);
      return reject(error);
    });
  });
};


exports.platform = {
  retrieve,
  add,
};
