console.log("=== OBJETOS OOP ===");

// objeto literal
const objLiteral = {};

// objeto OOP
const objOop = new Object();

/*
        ===========
        |  CONTA  |
        ===========
       /           \ 
    PROPS         MÉTODOS
    agencia       saque()
    tipo          transfere()
    numero        deposita()
    digito        pagamento()
    saldo         encerrar()
    titular       

*/

// Constructor Pattern
function Conta(agencia=0, numero=0, digito=0, tipo="CP", saldo=0, titular=null) {
  // propriedades
  this.agencia = agencia;
  this.numero = numero;
  this.digito = digito;
  this.tipo = tipo;
  this.saldo = saldo;
  this.titular = titular;

  // método (má prática)
  // this.deposita = function(valor) {
  //   return this.saldo += valor;
  // }
}

Conta.prototype.deposita = function(valor) {
  this.saldo += valor;
  return valor;
}

Conta.prototype.saque = function(valor) {
  this.saldo -= valor;
  return valor;
}

Conta.prototype.transfere = function(valor, contaDestino) {
  contaDestino.deposita(this.saque(valor));
  return this.saldo;
}

// Testing
const conta1 = new Conta("001", 44, 2, "CC", 5000, "281.562.058-50");
conta1.deposita(500);
conta1.saque(750);

const conta2 = new Conta("002", 10, 5, "CP", 2000, "303.058.562-50");
conta2.deposita(200);
conta2.saque(1200);
// conta2.transfere(100, conta1);

console.log(conta1, conta1.agencia, conta1.saldo);

console.log(conta2, conta2.agencia, conta2.saldo);


console.log(String.prototype);

String.prototype.bold = function() {
  return "<strong>" + this + "</strong>"; 
}

console.log(
    new String("caelum").bold(),
    "alura".bold()
)


