var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

var connections = 0;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/demo', function(req, res){
  res.sendFile(__dirname + '/demo.html');
});

app.get('/about', function(req, res){
	res.send('<h1>About</h1>');
});

app.get('/test', function(req, res) {
	res.send('<span>Hosts connected: ' + connections + '</span>');
});

io.on('connection', function(socket){
  connections = connections + 1;
  console.log('A user connected. Users: ' + connections);

  socket.on('disconnect', function(){
    connections = connections - 1;
    console.log('A user disconnected. Users: ' + connections);
  });

  socket.on('alert', function(msg){
  	console.log('An alert was emitted: ' + msg);
  	socket.broadcast.emit('alert', msg);
  });

});

http.listen(port, function(){
 	console.log('listening on *:' + port);
});