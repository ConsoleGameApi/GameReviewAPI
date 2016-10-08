// endpoint /api/search/game
const searchGameModel = require('../../models/search/search.game.model');
const searchGameHelper = require('../../helpers/search/search.game.helper');

const get = (req, res) => {
  console.log('inside searchGameController req.query is: ', req.query);
    return searchGameHelper.read(req.query)
    .then((game) => res.status(200).send(game))
    .catch((error) => res.status(500).end(error));
}; 


exports.search = {
  get,
};
