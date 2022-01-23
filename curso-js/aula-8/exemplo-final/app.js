console.log("=== APP ===");

const calc = require("./calc");

// console.log( calc[0], calc[0](2, 2) );

// console.log( calc[1], calc[1](2, 2) );

console.log( calc.soma(1,2) );

console.log( calc.multiplica(1,2) );

let { soma, multiplica } = calc;

console.log("===>", soma(1,2));
console.log("===>", multiplica(1,2));


