var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/plain'});
    res.end('hello word')
}).listen('8888','127.0.0.1');

console.log('server 启动完毕!');