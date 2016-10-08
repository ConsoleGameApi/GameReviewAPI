const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const db = require('./database/db');
const databaseRouter = require('./router/database.router'); 

app.use(bodyParse.json({limit: '50mb'}));
app.set('port', process.env.PORT || 3000);

app.use('/api/db', databaseRouter)

app.listen(app.get('port'), function() {
  db.ensureSchema();
  console.log('we are now listening on ', app.get('port'))
})