var http = require('http');
var events = require('events');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Welcome');
}).listen(8081);


console.log('server running on http://127.0.0.1:8081...');
