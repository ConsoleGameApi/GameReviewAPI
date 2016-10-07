const db = require('../db');
const addGenreModel = module.exports;

addGenreModel.isGenreExists = (params) => {
  console.log('inside addGenreModel check params are: ', params);
  return db('Genres').where({
    name: params.genre,
  }).select('name')
  .then((result) => {
    if (result.length) {
      console.log('Genre already exists: ', result);
      return true;
    }
    console.log('Genre does not exist at', result);
    return false;
  });
};

addGenreModel.add = (params) => {
  return db('Genres').insert({
    name: params.genre,
  })
  .then((row) => {
    console.log('inside addGenreModel row is: ', row);
    return row[0];
  });
};
