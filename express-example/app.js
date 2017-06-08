var express = require('express');
var app = express();
var body_parser = require('body-parser');

var promise = require('bluebird');
var pgp = require('pg-promise')({
  promiseLib: promise
});

var db = pgp({database: 'test'});

app.set('view engine', 'hbs');

app.use(body_parser.urlencoded({extended: false}));
app.use('/static', express.static('public'));

app.use(function (request, response, next) {
  console.log(request.method, request.path);
  next();
});

app.get('/', function (request, response) {
  response.send('<h1>Hello World</h1>');
});

app.get('/about', function (request, response) {
  response.send('About Me');
});

app.get('/projects', function (request, response) {
  response.send('Projects');
});

// URL Parameters
app.get('/post/:slug', function (request, response) {
  var slug = request.params.slug;
  response.send('Post about: ' + slug);
});

// GET Query Parameters
app.get('/hello', function (request, response) {
  var name = request.query.name || "World";
  var context = {
    title: 'Hello',
    name: name,
    content: '<strong>hello</strong>',
    image: '/static/cat-dog.jpg',
    friends: [
      {name: "john", age: 21},
      {name: "jane"}
    ]
  };
  
  response.render('hello.hbs', context);
});

app.get('/form', function (request, response) {
  response.render('form.hbs', {title: 'html form'});
});

app.post('/submit', function (request, response) {
  console.log(request.body);
  response.redirect('/thank-you');
});

app.get('/thank-you', function (request, response) {
  response.render('thanks.hbs', {title: 'Thanks!'});
});

app.get('/search', function (request, response, next) {
  let term = request.query.searchTerm;
  let query = "SELECT * FROM restaurant WHERE restaurant.name ILIKE '%$1#%'";
  db.any(query, term)
    .then(function (results) {
      response.render('search.hbs', {results: results});
    })
    .catch(next);
});

app.listen(8000, function () {
  console.log('Listening on port 8000');
});
