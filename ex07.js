var http = require('http');

var req = process.argv[2];

http.get(req, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (data) {
        console.log(data);
    });
    res.on('error', function (error) {
        console.log(error);
    });
});
