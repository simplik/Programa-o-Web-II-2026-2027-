let n1 = Number(prompt("Digite a nota da N1: "));
let n2 = Number(prompt("Digite a nota da N2: "));

let notafinal = (n1 * 2 + n2 * 3) / 5;
console.log("Nota final: " + notafinal.toFixed(2));

if (notafinal >= 7) {
    console.log("Aluno aprovado");
} else {
    console.log("Aluno reprovado");
}