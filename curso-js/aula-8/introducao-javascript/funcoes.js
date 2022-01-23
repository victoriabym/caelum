console.log("=== FUNCOES ===");

// Javascript - EcmaScript (ES)
// Antes Jul/2015 - ES5
// Depois Jul/2015 - ES6

// Declaração de Função Nomeada
// ES6 - Default Parameter
function soma(a=0, b=0) {
  const total = a + b;
  return total;
}

// Declaração de Função Anônima
// ES6 - Default Parameter
const sum = function (x=0, y=0) {
  const result = x + y;
  return result;
}

console.log("2 + 2 =", soma(2,2));
console.log("4 + 4 =", sum(4,4));
console.log(soma(2));
console.log(soma());
