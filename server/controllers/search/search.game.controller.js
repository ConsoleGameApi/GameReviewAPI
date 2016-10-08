// endpoint /api/search/game
const searchGameModel = require('../../models/search/search.game.model');
const post = (req, res) => {
  console.log('req.body inside searchGameModelController is: ', req.body);
  if (req.body.score) {
    return searchGameModel.score(req.body)
    .then((game) => {
      console.log('game from score search is: ', game)
      res.status(200).send(game);
    });
  } else {
    console.log('please search by score with this endpoint')
    res.status(500).end(console.log('please search by something else'))
  }
};




exports.search = {
  post,
};
