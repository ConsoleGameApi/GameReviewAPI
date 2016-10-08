const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./database/db');
const databaseRouter = require('./routers/database.router');
const searchRouter = require('./routers/api/search.router.js');
const babel = require('babel-register');
require(path.join(__dirname, '/middlewares/application.js'))(app, express)
const debug = require('debug')('http')
  , http = require('http')
  , name = 'My App';

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({limit: '50mb'}));
app.set('port', process.env.PORT || 3000);



app.use('/api/db', databaseRouter);
app.use('/api/search', searchRouter);

app.listen(app.get('port'), function() {
  // db.ensureSchema();
  debug('listening')
  console.log('we are now listening on ', app.get('port'))
})