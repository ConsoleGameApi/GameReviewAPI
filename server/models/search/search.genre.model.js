import db from '../../database/db';

const searchGenreModel = {};

searchGenreModel.find = (params) => {
  console.log('params going into searchGenreModel: ' , params);
  const options = {};
  if (params.name) options.name = params.name;
  if (params.score) options.score = params.score;
  return db
  .select('*')
  .from('Games')
  .join('Games2Genres', 'Games.id', 'Games2Genres.game_id')
  .join('Genres', 'Games2Genres.genre_id', 'Genres.id')
  .where(options)
  .then((result) => {
    console.log('result from query: ', result)
    return result;
  });
};

export default searchGenreModel;