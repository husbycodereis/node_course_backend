const num1 = 5;
const num2 = 10;

function addValues() {
    console.log(`the sum is ${num1 + num2}`);
}

//* if you invoke a function inside a module, it will be fired in the other module where it is called
addValues()
