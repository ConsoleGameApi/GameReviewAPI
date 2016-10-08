// endpoint /api/search/game
const searchGameModel = require('../../models/search/search.game.model');
const searchGameHelper = require('../../helpers/search/search.game.helper');

const get = (req, res) => {
  console.log('inside searchGameController req.query is: ', req.query);
    return searchGameHelper.read(req.query)
    .then((game) => {
      if (game.length) {
        res.status(200).send(game)
      }
      res.status(500).end('no search results, check your optional parameters and try again.');
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
