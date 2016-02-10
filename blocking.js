var fs = require('fs');

// This code blocks...
var data = fs.readFileSync('input.txt');
console.log('Blocking Read: ' + data.toString());
console.log('Blocking Read: done...');

console.log('##--------------------------------##');

// This code does not block...
fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log('Non-Blocking Read: ' + data.toString());
});
console.log('Non-Blocking Read: done...');
