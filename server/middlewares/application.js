const application = (app, express) => {


  app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
  });

  app.get('/api/search/:id', (req,res,next) => {
    console.log('inside /api/search/:id req.method is: ', req.method)
    console.log('inside /api/search/:id id is: ', req.params)
    next()
  })
};

module.exports = application