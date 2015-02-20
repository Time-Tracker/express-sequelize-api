var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');

app.configure(function() {

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(morgan('combined'));
  app.use(express.cookieParser());
  app.use(cors());
});

require('./app/routes.js')(app);
app.listen(port);