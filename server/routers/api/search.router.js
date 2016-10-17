const router = require('express').Router();
const searchGameController = require('../../controllers/search/search.game.controller');
import searchGenreController from '../../controllers/search/search.genre.controller';
import searchPlatformController from '../../controllers/search/search.platform.controller';

router.get('/games', searchGameController.search.get);
router.get('/genres', searchGenreController.search.get);
router.get('/genres/list', searchGenreController.search.all);
router.get('/platforms', searchPlatformController.search.get);
router.get('/platforms/list', searchPlatformController.search.all);

module.exports = router