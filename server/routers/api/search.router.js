const router = require('express').Router();
const searchGameController = require('../../controllers/search/search.game.controller');

console.log('are we here')

router.get('/game', searchGameController.search.get);

module.exports = router