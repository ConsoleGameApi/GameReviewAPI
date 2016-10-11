// endpoint /api/search/genre
import searchGenreModel from '../../models/search/search.genre.model';
import searchGenreHelper from '../../helpers/search/search.genre.helper';

const get = (req, res) => {
  console.log('inside searchGenreController req.query is: ', req.query);
    return searchGenreHelper.read(req.query)
    .then((genre) => {
      console.log('inside genre controller genre is: ', genre)
      if (genre.length) {
        res.status(200).send(genre);
      }
      res.status(500).end('no search results, check your parameters and try again.');
    })
    .catch((error) => {
      if (error) {
        console.log('error with that search: ', error);
        res.status(500).end(error);
      }
    });
};


exports.search = {
  get,
};
