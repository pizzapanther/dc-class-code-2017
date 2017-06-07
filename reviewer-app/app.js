var express = require('express');
var body_parser = require('body-parser');
var promise = require('bluebird');
var pgp = require('pg-promise')({
  promiseLib: promise
});

var db = pgp({database: 'test'});

var app = express();

app.set('view engine', 'hbs');

app.use(body_parser.urlencoded({extended: false}));
app.use('/static', express.static('public'));

app.get('/', function (request, response) {
  response.render('homepage.hbs', {});
});

app.get('/search', function (request, response) {
  var search = request.query.searchTerm;
  // generate based on the search term
  // results = []
  response.render('search.hbs', {results: results});
});

app.listen(8000, function () {
  console.log('Listening on Port 8000');
});
