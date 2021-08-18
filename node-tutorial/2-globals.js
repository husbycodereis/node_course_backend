
//? __dirname = path to current directory
//? __filename = file name
//? require = function to use modules (commonJS)
//? module = info about current module (file)
//? process = info about env where the program is being executed


console.log(__filename);

let number = 0;

setInterval(() => {
    console.log('log text number: ' + number);
    number++;
}, 1000);