var http = require('http');
var bl = require('bl');

var reqs = [process.argv[2], process.argv[3], process.argv[4]];

function httpGet (i) {
  http.get(reqs[i], function (res) {
    res.pipe(bl(function (err, data) {
      if (err) {
        return console.log(err);
      }
      data = data.toString();
      console.log(data);
    }));
  });
}

for (var i=0; i<reqs.length; i++) {
  httpGet(i);
}
