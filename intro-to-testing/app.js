var express = require('express');
var app = express();
var MyMath = require('./mymath');

app.get('/', function (request, response) {
  response.send('<h1>Hello World</h1>' + MyMath.add(2, 2));
});

app.listen(8000, function () {
  console.log('Listening on port 8000');
});

exports.app = app;
