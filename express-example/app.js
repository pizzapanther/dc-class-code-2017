var express = require('express');
var app = express();

app.set('view engine', 'hbs');
app.use('/static', express.static('public'));

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

app.listen(8000, function () {
  console.log('Listening on port 8000');
});
