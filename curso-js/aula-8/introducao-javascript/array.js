console.log("=== ARRAY ===");

// Sintaxe OOP
const cars = new Array("Fox", "Uno", "Corolla");

// Sintaxe Literal
let carros = ["Gol", "Celta", "Palio"];
carros.push("Onix"); // add item no final
carros.unshift("Corsa"); // add item no começo
carros.splice(2, 0, "HB20"); // add item na pos X
carros.splice(4, 1); // remove item na pos X
carros.splice(1, 1, "Civic"); // substitui item na pos X
carros.sort(); // ordena os valores do array
carros.reverse(); // inverte os valores do array
carros = carros.concat(cars); // concatena os valores dos arrays
carros.pop(); // remove item do final
carros.shift(); // remove item no inicio

console.log(carros);

/*
console.log(carros[0]);
console.log(carros[1]);
console.log(carros[2]);
console.log(carros[3]);
console.log(carros[4]);
console.log(carros[5]);
*/

function pegaCarro(carro, pos) {
  console.log(pos, carro);
}

carros.forEach(pegaCarro); // pegaCarro("HB20", 0, carros)

console.log("");

carros.forEach(function(carro, pos) {
  // console.log(arguments[1], arguments[0]);
  console.log(pos, carro);
});


// Array API
console.dir(Array.prototype);
