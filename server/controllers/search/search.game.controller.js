// endpoint /api/search/game
const searchGameModel = require('../../models/search/search.game.model');

const post = (req, res) => {
  console.log('req.body inside searchGameModelController is: ', req.body);
  return searchGameModel.search(req.query)
  .then(function(result) {
    console.log('result is: ', result)
  });
}




exports.search = {
  post,
};
