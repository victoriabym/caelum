console.log("=== OBJETOS 2 ===");
/*
        ==========
        |  AUTO  |
        ==========
       /          \ 
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
var auto = {
  modelo: "Uno",
  ano: 2010,
  cor: "prata",
  velocidade: {
    atual: 0,
    min: 0,
    max: 10
  },
  acelerar: function() {
    if (this.velocidade.atual < this.velocidade.max) {
      this.velocidade.atual++;
    }
    
    return this.velocidade.atual;
  },
  freiar: function() {
    if (this.velocidade.atual > this.velocidade.min) {
      --this.velocidade.atual;
    }

    return this.velocidade.atual; 
  }
};

console.log(auto);
