let n = Number(prompt("Digite quantos números serão lidos: "));
let soma = 0;

for (let i = 1; i <= n; i++) {
    let numero = Number(prompt("Digite o número desejado: "));
    if (numero < 2) {
        primo = false;
    } else {
        for (let i = 2; i < numero; i++ ) {
            if (numero % i == 0) {
                primo = false;
            }
        }
    }
    if (primo) {
        soma = soma + numero;
    }
}

console.log("Soma dos números primos: " + soma);