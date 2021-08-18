//* Streams  
//* Streams extends to events class
//* Streams are used to store bigger files

const { createReadStream} = require('fs');

//when creating a stream default reading size is 64 kb (64000 bytes) per read. highWaterMark defines the reading size.
const stream = createReadStream('./content/big.txt', {highWaterMark: 42000});

stream.on('data', (result) => {
    console.log(result); 
})

stream.on('error', (result) => {
    console.log(result);
})