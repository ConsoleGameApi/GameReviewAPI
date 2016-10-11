const db = require('../db');

const addGenreModel = module.exports;


addGenreModel.isGenreExists = (genre) => {
  // console.log('inside addGenreModel check params are: ', genre);
  return db('Genres').where({
    name: genre,
  }).select('id')
  .then((result) => {
    // console.log('RESULT: ', result)
    if (result.length) {
      // console.log('Genre already exists: ', result);
      return result[0].id;
    }
    // console.log('Genre does not exist at', result);
    return -1;
  });
};

addGenreModel.add = (genre) => {
  return db('Genres').insert({
    name: genre,
  })
  .then((row) => {
    // console.log('inside addGenreModel row is: ', row);
    return row[0];
  });
};

