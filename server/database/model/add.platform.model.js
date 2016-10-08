const db = require('../db');

const addPlatformModel = module.exports;

addPlatformModel.isPlatformExists = (params) => {
  console.log('inside addPlatformModel check params are: ', params);
  return db('Platforms').where({
    console_name: params.platform,
  }).select('id')
  .then((result) => {
    if (result.length) {
      console.log('Platform already exists: ', result);
      return result[0].id;
    }
    console.log('Platform does not exist at', result);
    return -1;
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
