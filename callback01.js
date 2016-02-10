var fs = require("fs");

function doStuffWithText(err, text) {
  if (err) {
    console.log(err.stack);
  } else {
    console.log("Here's the text: " + text);
  }
}

// Call readFile with a defined callback function
fs.readFile("input.txt", doStuffWithText);

// Call readFile with an anonymous callback function
fs.readFile("input.txt", function(err, text) {
  if (err) {
    console.log(err.stack);
  } else {
    console.log("Text from anonymous: " + text);
  }
});

console.log("Done...");
