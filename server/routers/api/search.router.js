const router = require('express').Router();
const searchGameController = require('../../controllers/search/search.game.controller');
import searchGenreController from '../../controllers/search/search.genre.controller';
console.log('are we here')

router.get('/games', searchGameController.search.get);
router.get('/genres', searchGenreController.search.get);

module.exports = router