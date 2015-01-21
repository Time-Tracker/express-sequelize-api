var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser');
var cors = require('./cors');

app.configure(function () {

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(express.logger('dev'));
  app.use(express.cookieParser());
  app.use(cors);
});

require('./app/routes.js')(app);

app.listen(port);
console.log('The magic happens on port ' + port);