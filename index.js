var app = require('express')();  
var http = require('http').Server(app);  
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){  
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  
  socket.on('soco', function(msg){
    io.emit('chat message', 'Você causou '+msg+' de dano.');
  });
});


http.listen(port, function(){  
  console.log('servidor rodando em localhost:3000');
});