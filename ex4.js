var fs = require('fs');

fs.readFile(process.argv[2], function(err, data) {
    if (err) {
        return console.log(err);
    }
    var file = data.toString();
    var lines = file.split('\n').length - 1;
    
    console.log(lines);
});
