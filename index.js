var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/about', function(req, res){
	res.send('<h1>About</h1>');
});

http.listen(3000, function(){
 	console.log('listening on *:3000');
});