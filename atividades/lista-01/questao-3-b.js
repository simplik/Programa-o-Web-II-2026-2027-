function produtorio(...numeros) {
    let resultado = 1;
    for (let i = 0; i < numeros.length; i++ ) {
        resultado = resultado * numeros[i];
    }
    return resultado;
}
