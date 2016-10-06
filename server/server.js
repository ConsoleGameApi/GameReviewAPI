const express = require('express');
const app = express();
const bodyParse = require('body-parser');

app.use(bodyParse.json({limit: '50mb'}));

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  //insert ensureSchema funciton here
  console.log('we are now listening on ', app.get('port'))
})