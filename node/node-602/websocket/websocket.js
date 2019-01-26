function WebSocket(App){
    var io = require('socket.io')(App);
    io.on('connection', function (socket) {
        socket.on('receive',function(data){
            console.log(data);
            io.sockets.emit('message',data);
            socket.emit('this_message',data);
        })
    })
}
module.exports = WebSocket;
