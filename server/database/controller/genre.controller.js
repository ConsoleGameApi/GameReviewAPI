const addGenreModel = require('../model/add.genre.model.js');
const Promise = require('bluebird');


const retrieve = () => {}

const add = (genre) => {
  console.log('we are inside genre.controller.js inside add: ')
  return new Promise((resolve, reject) => {
    addGenreModel.add(genre)
  })
  .then((result) => {
    console.log('inside genre.controller')
    console.log('result inside genre.controller inside add: ', result);
  })
  .catch((error) => {
    console.log('error inside genre.controller inside add: ', error);
  })
}



exports.genre = {
  retrieve,
  add
}

