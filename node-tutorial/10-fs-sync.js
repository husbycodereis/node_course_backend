const { readFileSync, writeFileSync } = require('fs');

console.log('start first task');

// requires 2 parameters. 1st is the path and 2nd is the encoding method.
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

//first parameter is the path to create file, second parameter is the content of the file
//flag: a parameter appends the text and adds on top of the original text
writeFileSync('./content/result-sync.txt', `Here is the result ${first}, ${second}`, { flag: 'a' });

console.log('finish first task');
console.log('start next task');