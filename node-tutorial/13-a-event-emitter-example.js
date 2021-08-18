const EventEmitter = require('events');

const customEmitter = new EventEmitter();


//* when customEmitter.emit('response') is fired, .on method makes another function get triggered with it
customEmitter.on('response', () => {
    console.log( 'data received');
});

customEmitter.emit('response');