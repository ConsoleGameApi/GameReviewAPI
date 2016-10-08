const router = require('express').Router();
const searchGameController = require('../../controllers/search/search.game.controller');


router.post('/game', searchGameController.search.post);
module.exports = router