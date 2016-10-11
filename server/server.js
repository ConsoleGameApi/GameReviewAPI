import express from 'express';
const app = express();
import path from 'path';
import bodyParser from 'body-parser';
import db from './database/db';
import databaseRouter from './routers/database.router';
import searchRouter from './routers/api/search.router.js';
require(path.join(__dirname, '/middlewares/application.js'))(app, express);


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({limit: '50mb'}));
app.set('port', process.env.PORT || 3000);


app.use('/api/db', databaseRouter);
app.use('/api/search', searchRouter);

app.listen(app.get('port'), function() {
  // db.ensureSchema();
  console.log('we are now listening on ', app.get('port'));
})