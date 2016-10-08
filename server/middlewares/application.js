const application = (app, express) => {


  app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
  });
};

module.exports = application