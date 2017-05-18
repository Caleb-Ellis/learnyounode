var readDir = require('./ex6a');

var args = process.argv.slice(2);
var dir = args[0];
var filter = args[1];

readDir(dir, filter, function (err, list) {
    if (err) {
        console.log(err);
    }
    list.forEach(function (i) {
        console.log(i);
    });
});
