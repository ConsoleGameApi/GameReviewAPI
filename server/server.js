var express = require('express');
var app = express();
var bodyParse = require('body-parser');
var db = require('./database/db')

app.use(bodyParse.json({limit: '50mb'}));

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
  db.ensureSchema();
  console.log('we are now listening on ', app.get('port'))
})