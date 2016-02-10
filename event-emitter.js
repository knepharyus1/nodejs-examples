//--------------- Variable declarations ---------------
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// create an event handler
var connectHandler = function() {
  console.log("We connected, so now we can emit the data received event...");
  var data = "this is the data";
  // Fire the data_received event with two additional args:
  // arg1 = description of the event being emitted
  // arg2 = the data that was received
  eventEmitter.emit('data_received', 'data received event', data);
}

var logger = function(event) {
  console.log("event logger: " + event + " fired...");
}

//--------------- Event bindings ---------------

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

// Bind the connection event with the logger
eventEmitter.on('connection', logger);

// Bind the data_received event with an anonymous function
eventEmitter.on('data_received', function(event, data) {
  console.log("data received was " + data + "...");
});

// Bind the data_received event with the logger
eventEmitter.on('data_received', logger);

//--------------- Process flow ---------------

// Fire the connection event with an additional arg describing the event
eventEmitter.emit('connection', 'connection event');

console.log('Done...');
