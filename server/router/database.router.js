const router = require('express').Router();
const initController = require('../database/controller/init.controller')

console.log('we are inside databaseRouter')

router.get('/init', initController.init.init);

module.exports = router