const db = require('../../database/db');

const searchGameModel = module.exports

searchGameModel.score = (params)=> {
  console.log(`params inside searchGameModel: ${params}`);
  return db('Games').where({
    score: 9,
  }).select('*')
  .then((result) => {
    if (result) {
      console.log(`game with score of (add params) is: ${params}`);
      return result
    }
  })
  .catch((err) => {
    console.log(`error inside searchGameModel post: ${err}`);
    return err
  })
};
