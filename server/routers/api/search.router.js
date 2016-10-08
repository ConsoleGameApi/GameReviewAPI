const router = require('express').Router();
const searchGameController = require('../../controllers/search/search.game.controller');

console.log('are we here')

router.post('/game', searchGameController.search.post);
module.exports = router