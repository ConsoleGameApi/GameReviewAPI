import db from '../../database/db';

const searchGenreModel = {};

searchGenreModel.find = (params) => {
  console.log('params going into searchGenreModel: ', params);
  const options = {};
  if (params.name) options.name = params.name;
  if (params.release_year) options.release_year = params.release_year;
  if (params.release_month) options.release_month = params.release_month;
  if (params.release_day) options.release_day = params.release_day;
  if (params.editors_choice) options.editors_choice = params.editors_choice;
  if (params.score) { 
  // if just score
  options.score = params.score;
    return db
    .select('*')
    .from('Games')
    .join('Games2Genres', 'Games.id', 'Games2Genres.game_id')
    .join('Genres', 'Games2Genres.genre_id', 'Genres.id')
    .where(options)
    .orderBy('score', 'desc')
    .limit(25)
    .then((result) => {
      console.log('result from query: ', result)
      return result;
    })
    .catch((error) => {
      if (error) {
        return console.error('Error inside searchGenreModel.find', error);
      }
    });
  } else if (params.score_range) {
    // if score_range is selected
    const score_range_array = params.score_range
    .split(',')
    .map((elem, index) => {
      elem = parseInt(elem);
      if ((typeof elem === 'number') && (elem <= 10) && (elem > 0)) {
        return parseInt(elem);
      }
    });
    if (score_range_array.length < 2) score_range_array[1] = 10;
    return db
    .select('*')
    .from('Games')
    .join('Games2Genres', 'Games.id', 'Games2Genres.game_id')
    .join('Genres', 'Games2Genres.genre_id', 'Genres.id')
    .whereBetween('score', score_range_array)
    .andWhere(options)
    .orderBy('score', 'desc')
    .limit(50)
    .then((result) => {
      if (result) {
        console.log('result inside searchGameModel: ', result);
        return result;
      }
    })
    .catch((error) => {
    console.error('error inside searchGameModel: ', error);
    });
  } // otherwise if no score's:
  return db
  .select('*')
  .from('Games')
  .join('Games2Genres', 'Games.id', 'Games2Genres.game_id')
  .join('Genres', 'Games2Genres.genre_id', 'Genres.id')
  .where(options)
  .orderBy('score', 'desc')
  .limit(50)
  .then((result) => {
    if (result) {
      console.log('result inside searchGenreModel: ', result)
      return result;
    }
  })
  .catch((error) => {
    console.error('error inside searchGenreModel: ', error);
  });
};

searchGenreModel.all = (params) => {
  return db('Genres')
  .select('name')
  .then((result) => {
    if (result) {
      console.log('result inside searchGenreModel.all: ', result)
      return result;
    }
  })
  .catch((error) => {
    console.error('error inside searchGenreModel.all: ', error);
  });
}

export default searchGenreModel;