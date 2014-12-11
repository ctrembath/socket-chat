var socket = io.connect('/sockets');

socket.on('Welcome', function(){
  console.log("A new user connected");
});