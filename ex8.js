var http = require('http');
var bl = require('bl');

var req = process.argv[2];

http.get(req, function (res) {
  res.pipe(bl(function (err, data) {
      if (err) {
        return console.log(err);
      }
      data = data.toString();
      console.log(data.length);
      console.log(data);
    }));
});
