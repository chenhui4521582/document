let express = require('express');
let configFile = require('./config/configFile');
let WebSocket = require('./websocket/websocket');
let Interface = require('./router/interfaceRouter');

let App = express();

let server = require('http').createServer(App);

server.listen(4000,()=>{
    console.log('App start listen 4000')
});


App.get('/',(req,res)=>{
    res.render('index')
});

configFile.init(App); //配置个插件;

Interface.routerConfig(App);  //路由接口

WebSocket(server); //websocket
