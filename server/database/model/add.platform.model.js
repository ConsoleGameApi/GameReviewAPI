const db = require('../db');
const Promise = require('bluebird');

const addPlatformModel = module.exports;

addPlatformModel.add = (params) => {
  return db('Platforms').insert({
    console_name: params.platform,
  })
  .then((row) => {
    console.log('inside addPlatformModel row is: ', row);
    return row[0];
  });
};
