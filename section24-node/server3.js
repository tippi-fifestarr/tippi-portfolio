const express = require('express')

const app = express();

// boilerplate for 
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static(__dirname + '/public'))

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
console.log("hey event emitter")
myEmitter.emit('event');
console.log("hey event emitted")

app.listen(3000);