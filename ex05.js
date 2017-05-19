var fs = require('fs');

var dir = process.argv[2];
var filter = process.argv[3];

var ls = fs.readdir(dir, function callback (err, list) {
    if (err) {
        console.log(err)
    }
    list.forEach(function (file) {
        if (file == filter) {
            return false;
        }
        if (file.split('.').pop() == filter) {
            console.log(file);
        }
    });
});
