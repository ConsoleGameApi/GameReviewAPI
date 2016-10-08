const db = require('../../database/db');

const searchGameModel = module.exports

searchGameModel.score = (params)=> {
  console.log('params inside searchGameModel', params);
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

searchGameModel.score_range = (params) => {}

searchGameModel.title = (params) => {}
