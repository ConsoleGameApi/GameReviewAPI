const db = require('../db');
const Promise = require('bluebird');

const addPlatformModel = module.exports;

addPlatformModel.isPlatformExists = (params) => {
  console.log('inside addPlatformModel check params are: ', params);
  return db('Platforms').where({
    console_name: params.platform,
  }).select('console_name')
  .then((result) => {
    if (result.length) {
      console.log('Platform already exists: ', result);
      return true;
    }
    console.log('Platform does not exist at', result);
    return false;
  });
};

addPlatformModel.add = (params) => {
  return db('Platforms').insert({
    console_name: params.platform,
  })
  .then((row) => {
    console.log('inside addPlatformModel row is: ', row);
    return row[0];
  });
};
