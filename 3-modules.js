//* modules = Encapsulated Code (that only share the minimum)
//* CommonJS, every file is a module by default



const names = require('./4-first-module');
const sayHolla = require('./5-second-module');
const data = require('./6-alternative-flavor');

require('./7-mind-grenade');

sayHolla('Darina');
sayHolla(names.floki);
sayHolla(names.riza);
console.log(data);