let reais = Number(prompt("Digite o valor em reais: "));
let cotacao = Number(prompt("Digite a cotação do dólar: "));

let dolares = reais / cotacao;

console.log("Valor em dólares: " + dolares.toFixed(2));