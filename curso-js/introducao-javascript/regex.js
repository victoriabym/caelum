console.log("=== REGEX ===");

/*

REGEX

Metacaracteres
==============

^     INICIO DA LINHA
$     FINAL DA LINHA
[]    LISTA (PERMITIDA)
[i-f] LISTA (INTERVALADA)
{n}   QUANTIFICADOR
{i,f} QUANTIFICADOR (INTERVALADO)
\c    ESCAPE (CARACTERES ESPECIAIS)
?     OPCIONAL
()    GRUPO
+     REPETIDOR

\s    ESPAÇO EM BRANCO
\w    CONJUNTO ALFANUMERICO
\W    CARACTERES NÃO NUMERICOS (ESPECIAIS)
\d    APENAS DIGITOS
\D    NAO DIGITOS

.     QUALQUER CARACTER

CEP V1: ^[0-9]{5}[\s\-]?[0-9]{3}$
EMAIL V1: ^[a-zA-Z0-9\-\_\.]{1,}\@[\w\-]+\.\w{2,}(\.\w{2,})?$
*/

// const cepUsuario = prompt("Digite o seu CEP:");
const cepUsuario = "08030-190";
console.log(cepUsuario);

// Sintaxe Literal
const cepRegex = /^[0-9]{5}[\s\-]?[0-9]{3}$/;

// Sintaxe OOP
// const cepRegex = new RegExp("^[0-9]{5}[\\s\\-]?[0-9]{3}$");

console.log(
  cepRegex,
  cepRegex.constructor
);

console.dir(RegExp.prototype);

if (cepRegex.test(cepUsuario)) {
  console.log(cepUsuario, "é válido!");
} else {
  console.log(cepUsuario, "é inválido!");
}

console.log(
  cepRegex.exec(cepUsuario)
);

console.log(
  cepUsuario.match(cepRegex)
);
