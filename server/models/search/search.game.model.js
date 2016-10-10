const _ = require('underscore');
import db from '../../database/db'

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

searchGameModel.score_range = (params) => {
  console.log('inside searchGameModel.score_range params are: ', params);
  const score_range_array = params.score_range
  .split(', ')
  .map((elem, index) => {
    elem = parseInt(elem);
    if ((typeof elem === 'number') && (elem <= 10) && (elem > 0)) {
    return parseInt(elem);
    }
  });
  console.log('score_range_array: ', score_range_array);
  if (score_range_array.length < 2) score_range_array[1] = 10;
  console.log('score range array: ', score_range_array)
  return db('Games').whereBetween('score', score_range_array)
  .select('*')
  .orderBy('score', 'desc')
  .then((result) => {
    if (result) {
      console.log('result inside searchGameModel.score_range', result);
      return result
    }
  })
  .catch((err) => {
    console.log(`error inside searchGameModel.score_range: ${err}`);
    return err
  });
};

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
      return -1;
    }
  })
  .catch((error) => {
    console.log('error inside searchGameModel.title: ', error);
    return error;
  });
};


searchGameModel.score_release_year = (params) => {
  console.log('params inside searchGameModel.score_release_year: ', params);
  return db('Games').where({
    score: params.score,
    release_year: params.release_year,
  }).select('*')
  .orderBy('score', 'desc')
  .then((result) => {
    if (result) {
      console.log('result inside searchGameModel.score_release_year: ', result);
      return result;
    } else {
      return -1;
    }
  })
   .catch((error) => {
    console.log('error inside searchGameModel.title: ', error);
    return error;
  });
};

searchGameModel.score_release_year_range = (params) => {
  console.log('inside searchGameModel.score_release_year_range params are: ', params);
  const score_range_array = params.score_range
  .split(', ')
  .map((elem, index) => {
    elem = parseInt(elem);
    if ((typeof elem === 'number') && (elem <= 10) && (elem > 0)) {
    return parseInt(elem);
    }
  });
  console.log('score_range_array: ', score_range_array);
  if (score_range_array.length < 2) score_range_array[1] = 10;
  console.log('score range array: ', score_range_array)
  return db('Games')
  .whereBetween('score', score_range_array)
  .andWhere({
    release_year: params.release_year
  })
  .select('*')
  .orderBy('score', 'desc')
  .then((result) => {
    if (result) {
      console.log('result inside searchGameModel.score_release_year_range', result);
      return result
    }
  })
  .catch((err) => {
    console.log(`error inside searchGameModel.score_release_year_range ${err}`);
    return err
  });
};





