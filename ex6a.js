var fs = require('fs');

var filteredList = function (dir, filter, callback) {
    fs.readdir(dir, function (err, list) {
        if (err) {
            return callback(err);
        }

        var extension = '.' + filter;

        var files = list.filter(function (f) {
            return f.indexOf(extension) !== -1;
        });

        callback(null, files);
    });
};

module.exports = filteredList;
