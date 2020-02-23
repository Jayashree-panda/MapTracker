const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
var cors = require('cors')

var corsOption = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
  };
  
 app.use(cors(corsOption));
io.sockets.on('connection', function(socket) {

    socket.on('send-location-to-server', function(data) {
        console.log(data);
        console.log("At server" + data.long + "," + data.lat)
    
        io.emit('send-location-to-manager',{ long: data.long, lat: data.lat});
    });

    socket.on('disconnect', function() {
        //io.emit('is_online', '🔴 <i>' + socket.username + ' left the chat..</i>');
        console.log("disconnect")
    })

    

});

const server = http.listen(3000, function() {
    console.log('listening on *:3000');
});