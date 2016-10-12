const router = require('express').Router();
const path = require('path');
// path.join(__dirname, '/database/seeding/init.controller');
const initSeedingController = require('../database/seeding/init.controller')


router.get('/init', initSeedingController.init.init);

module.exports = router