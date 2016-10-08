const db = require('../../database/db');

const searchGameModel = module.exports

searchGameModel.score = (params)=> {
  console.log('params inside searchGameModel.score', params);
  return db('Games').where({
    score: params.score,
  }).select('*')
  .then((result) => {
    if (result) {
      console.log('result inside searchGameModel.score', result);
      return result
    }
  })
  .catch((err) => {
    console.log(`error inside searchGameModel post: ${err}`);
    return err
  })
};

searchGameModel.score_range = (params) => {};

searchGameModel.title = (params) => {
  console.log('params inside searchGameModel.title', params);
  return db('Games').where({
    title: params.title,
  }).select('*')
  .then((result) => {
    if (result.length) {
      console.log('result inside searchGameModel.title: ', result);
      return result;
    }  else {
      return -1
    }
  })
  .catch((error) => {
    console.log('error inside searchGameModel.title: ', error);
    return error;
  });
};
