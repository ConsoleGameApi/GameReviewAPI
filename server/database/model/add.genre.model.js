const db = require('../db');

const addGenreModel = module.exports;


addGenreModel.isGenreExists = (g) => {
  console.log('inside addGenreModel check params are: ', g);
  return db('Genres').where({
    name: g,
  }).select('id')
  .then((result) => {
    if (result.length) {
      console.log('Genre already exists: ', result);
      return result[0].id;
    }
    console.log('Genre does not exist at', result);
    return -1;
  });
};

addGenreModel.add = (g) => {
  return db('Genres').insert({
    name: g,
  })
  .then((row) => {
    // console.log('inside addGenreModel row is: ', row);
    return row[0];
  });
};

