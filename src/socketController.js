var socket = function(io){

  io.on('connection', function(socket){
    console.log('user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
};



module.exports = socket;