var express = require('express');
var body_parser = require('body-parser');
var promise = require('bluebird');

var app = express();

app.use(body_parser.urlencoded({extended: false}));
app.use('/static', express.static('public'));

app.listen(8000, function () {
  console.log('Listening on Port 8000');
});
