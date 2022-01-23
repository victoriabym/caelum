function soma() {
  let total = 0;  
  Array.from(arguments).forEach((value) => total += value);
  return total;
}

function multiplica() {
  let total = 0;  
  Array.from(arguments).forEach((value) => total *= value);
  return total;
}

module.exports = {
  soma: soma,
  multiplica: multiplica
};



