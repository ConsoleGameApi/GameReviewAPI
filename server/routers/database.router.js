const router = require('express').Router();
const initSeedingController = require('../database/seeding/init.controller')


router.get('/init', initSeedingController.init.init);

module.exports = router