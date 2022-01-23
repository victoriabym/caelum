console.log("=== OBJETOS 1 ===");
/*

        ===========
        |  CARRO  |
        ===========
       /           \ 
    PROPS         MÉTODOS
    cor           acelerar()
    direcao       freiar()
    tamanho       abastecer()
    modelo        trocarMarcha()
    combust       buzinar()
    motor         darSeta()
    ano           abrirPorta()
    km            ligar()
    fabric        desligar()

*/

// Sintaxe Literal

const carro = {}; // obj vazio

// Dot Notation (Notação de Ponto)
// objeto.propriedade; (ler)
// objeto.propriedade = valor; (definir) 
carro.cor = "vermelho";
carro.modelo = "Fox";
carro.ano = 2020;

// objeto.metodo(); (executar)
// objeto.metodo = function() { ... }; (definir)
carro.ligar = function() {
  return "ON";
}

// Bracket Notation (Notação de Colchetes)
// objeto["propriedade"]; (ler)
// objeto["propriedade"] = valor; (definir)
carro["motor"] = 1.6;
carro["km"] = 15350;

// objeto["metodo"](); (executar)
// objeto["metodo"] = function() { ... }; (definir)
carro["desligar"] = function() {
  return "OFF";
}

console.log( carro );
console.log( carro.cor );
console.log( carro["modelo"] );
console.log( carro.ligar() );
console.log( carro["desligar"]() );
