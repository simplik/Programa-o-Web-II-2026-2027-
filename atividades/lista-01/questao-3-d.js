function Impares(numeros) {
    let impares = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 != 0) {
            impares.push(numeros[i]);
        }
    }
    return impares;
}
