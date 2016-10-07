const db = require('../db');
const Promise = require('bluebird');

const addGameModel = module.exports;

addGameModel.isGameExists = (params) => {
  console.log('inside addGameModel check params are: ', params);
  return db('Games').where({
    url: params.url,
    title: params.title,
  }).select('title')
  .then((result) => {
    if (result.length) {
      console.log('Game already exists: ', result);
      return true;
    }
    console.log('Game does not exist at', result);
    return false;
  });
};

addGameModel.add = (params) => {
  console.log('inside addGameModel params are: ', params);
  if (params.editors_choice === 'Y') {
    params.editors_choice = 1;
  } else if (params.editors_choice === 'N') {
      params.editors_choice = 0;
  }
  return db('Games').insert({
    score_phrase: params.score_phrase,
    title: params.title,
    url: params.url,
    score: params.score,
    editors_choice: params.editors_choice,
    release_year: params.release_year,
    release_month: params.release_month,
    release_day: params.release_day,
  })
  .then((row) => {
    console.log('row from addGameModel.add is: ', row);
    return row[0];
  })
  .catch((error) => {
    console.error('error inside add.game.model.add: ', error);
    return error;
  });
};
