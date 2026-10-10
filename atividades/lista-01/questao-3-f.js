let numero = Number(prompt("Digite o seu número da conta: "));

let conta = {
    saldo: 1000,
    numeroConta: numero,

    depositar: function(valor) {
        this.saldo = this.saldo + valor;
        console.log("Depósito realizado");
    },
    sacar: function(valor) {
        if (valor <= this.saldo) {
            this.saldo = this.saldo - valor;
            console.log("Saque realizado");
        } else {
            console.log("Saldo insuficiente");
        }
    },
    informarSaldo: function() {
        console.log("Saldo atual: R$ " + this.saldo);
    }
};
