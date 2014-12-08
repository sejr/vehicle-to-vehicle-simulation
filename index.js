var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/demo', function(req, res){
  res.sendFile(__dirname + '/demo.html');
});

app.get('/about', function(req, res){
	res.send('<h1>About</h1>');
});

io.on('connection', function(socket){
  console.log('A user connected.');
  socket.on('disconnect', function(){
    console.log('A user disconnected.');
  });
  socket.on('alert', function(msg){
  	console.log('An alert was emitted: ' + msg);
  	io.emit('alert', msg);
  });
});

http.listen(port, function(){
 	console.log('listening on *:' + port);
});