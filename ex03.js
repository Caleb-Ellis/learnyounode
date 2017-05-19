var fs = require('fs');

var dir = process.argv[2];
file = fs.readFileSync(dir);
contents = file.toString();

console.log(contents.split('\n').length - 1);
