var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);


app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(request, response){
  response.sendFile(__dirname + '/index.html');
});

 io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      console.log('message: ' + msg);
  });
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
});

server.listen(3000, function(){
  console.log("server listening on port *:3000");
});