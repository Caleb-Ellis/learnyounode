var net = require('net');

var port = process.argv[2];

function formatDate(item) {
    return (item < 10) ? ('0' + item) : (item);
}

function timeNow() {
  var date = new Date();
    return date.getFullYear()
        +'-'+formatDate((date.getMonth() + 1))
        +'-'+formatDate(date.getDate())
        +' '+formatDate(date.getHours())
        +':'+formatDate(date.getMinutes());
}

var server = net.createServer(function(socket) {
    socket.end(timeNow() + '\n');
});

server.listen(Number(port));
