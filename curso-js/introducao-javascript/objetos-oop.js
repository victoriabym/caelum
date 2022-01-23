console.log("=== OBJETOS OOP ==="); 

function Conta(agencia=null, conta=null, digito=null, tipo=null, saldo=null, titular=null) {
    this.agencia = agencia;
    this.conta = conta;
    this.digito = digito;
    this.tipo = tipo;
    this.saldo = saldo;
    this.titular = titular;

    // má pratica
    // this.deposita = function (valor) {
    //     return this.saldo += valor;
    // }
}

Conta.prototype.deposito = function (valor) {
    this.saldo += valor;
    return valor;
}

Conta.prototype.saque = function (valor) {
    this.saldo -= valor;
    return valor;
}

Conta.prototype.transferencia = function (valor, contaDestino) {
    //this.saque(valor);
    // contaDestino.deposito(valor);
    return contaDestino.deposito(this.saque(valor));
}

const conta1 = new Conta(4276, 22067, 2, "corrente", 1000, "Victoria");
const conta2 = new Conta(4276, 22067, 2, "corrente", 1000, "Victoria");