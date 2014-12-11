var socket = function(io){

  io.on('connection', function(socket){
    console.log('user connected');
  });
};

module.exports = socket;