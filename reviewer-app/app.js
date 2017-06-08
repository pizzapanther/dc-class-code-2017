var express = require('express');
var body_parser = require('body-parser');
var session = require('express-session');
var promise = require('bluebird');
var pgp = require('pg-promise')({
  promiseLib: promise
});

var db = pgp({database: 'test'});

var app = express();

app.set('view engine', 'hbs');

var morgan = require('morgan');
app.use(morgan('dev'));

app.use(body_parser.urlencoded({extended: false}));
app.use('/static', express.static('public'));
app.use(session({
  secret: process.env.SECRET_KEY || 'dev',
  resave: true,
  saveUninitialized: false,
  cookie: {maxAge: 600000}
}));

app.use(function (request, response, next) {
  if (request.session.user) {
    next();
  } else if (request.path == '/login') {
    next();
  } else {
    response.redirect('/login');
  }
});

app.get('/', function (request, response) {
  response.render('homepage.hbs', {});
});

app.get('/search', function (request, response) {
  var search = request.query.searchTerm;
  // generate based on the search term
  // results = []
  response.render('search.hbs', {results: results});
});

app.get('/login', function (request, response) {
  response.render('login.hbs');
});

app.post('/login', function (request, response) {
  var username = request.body.username;
  var password = request.body.password;
  if (username == 'aaron' && password == 'narf') {
    request.session.user = username;
    response.redirect('/');
  } else {
    response.render('login.hbs');
  }
});

app.listen(8000, function () {
  console.log('Listening on Port 8000');
});
