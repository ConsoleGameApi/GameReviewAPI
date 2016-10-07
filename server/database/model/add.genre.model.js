const db = require('../db');
const Promise = require('bluebird');

const addGenreModel = module.exports;

addGenreModel.add = (params) => {
  return db('Genres').insert({
    name: params.genre,
  })
  .then((row) => {
    console.log('inside addGenreModel row is: ', row);
    return row[0];
  });
};
