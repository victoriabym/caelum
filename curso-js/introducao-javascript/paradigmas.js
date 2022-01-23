console.log("=== PARADIGMAS ===");

// Sintaxe Literal (Comum)
// Implicita
const empresa = "Caelum";

console.log(empresa, typeof empresa, empresa.constructor);

// Sintaxe OOP
// Explicita
const company = new String("Caelum");

console.log(company, typeof company, company.constructor);

// API String
console.dir(String.prototype);

console.log(empresa.bold(), company.bold());
console.log(empresa.repeat(5));
console.log(company.repeat(5));

// Outras APIs
console.dir(Number.prototype);
console.dir(Boolean.prototype);
console.dir(Object.prototype);
console.dir(Array.prototype);
console.dir(Function.prototype);
console.dir(Date.prototype);
console.dir(RegExp.prototype);
console.dir(Math);
