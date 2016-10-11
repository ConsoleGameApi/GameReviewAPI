import db from '../../database/db';

const searchGenreModel = {};

searchGenreModel.find = (params) => {
  console.log('params going into searchGenreModel: ' , params);
}

export default searchGenreModel;