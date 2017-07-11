var express = require('express');
var app = express();
var jwt = require('jsonwebtoken');

var SECRET = 'SUPER-SECRET';

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('view engine', 'hbs');
app.use('/static', express.static('static'));
app.get('/', function (request, response) {
  var token = jwt.sign({user: 'pizzapanther'}, SECRET, {expiresIn: 5});
  response.render('chat.hbs', {token: token});
});

io.on('connection', function (client) {
  console.log('Connected', client.id);
  
  client.on('disconnect', function () {
    console.log('EXITED');
  });
  
  //client.on('incoming', function (msg) {
  //  io.emit('chat-msg', msg);
  //});
  
  client.on('join-room', function (room) {
    client.join(room, function () {
      console.log(client.rooms);
      io.to(room).emit('chat-msg', '**new user joined**');
    });
    
    client.on('incoming', function (msg) {
      try {
        var decoded = jwt.verify(msg.token, SECRET);
      } catch (e) {
        io.to(msg.room).emit('chat-msg', 'Sorry Loser');
        return;
      }
      
      console.log(decoded);
      io.to(msg.room).emit('chat-msg', msg.msg);
    });
  });
});

http.listen(8000, function () {
  console.log('Listening on port 8000');
});
