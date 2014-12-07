var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

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
  console.log('A user has connected.');
});

http.listen(3000, function(){
 	console.log('listening on *:3000');
});