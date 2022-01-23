console.log("=== ESCOPO ===");

/*
        ==========
        | WINDOW |
        ==========
       /          \ 
    PROPS         MÉTODOS
    curso         meuCurso()
    console       alert()
    closed        print()
    document      prompt()
    

        ==========
        | CONSOLE |
        ==========
       /          \ 
    PROPS         MÉTODOS
                  log()
                  error()
                  info()
                  warn()
*/

var fora = "Global"; // add prop no objeto global

function meuCurso() { // add método no objeto global
  var dentro = "Local"; // variavel global implicita
  fora = "Outro Valor";
  return fora + " " + dentro;
}

console.log(fora);
console.log(meuCurso());
console.log(fora);

// console.log(dentro); // efeito colateral global implicita

console.log(this); // objeto global (window)
