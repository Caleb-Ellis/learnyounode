var http = require('http');
var url = require('url');

var port = Number(process.argv[2]);

function formatTime(date) {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
}

function formatUnixTime(date) {
  return {
    unixtime: date.getTime()
  }
}

function processRequest(url, date) {
    var res = {};
    if (url === "/api/parsetime") {
        res = formatTime(date);
    } else if (url === "/api/unixtime") {
        res = formatUnixTime(date);
    }
    return res;
}

var server = http.createServer(function (req, res) {
  if (req.method !== 'GET') {
    return res.end("Needs to be GET method\n");
  }

  var urlInfo = url.parse(req.url, true);
  var date = new Date(urlInfo.query.iso);
  var data = processRequest(urlInfo.pathname, date);

  if (data) {
    res.writeHead(200, {'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404);
    res.end();
  }

  res.writeHead(200, {'Content-Type': 'application/json' });

});

server.listen(port);
