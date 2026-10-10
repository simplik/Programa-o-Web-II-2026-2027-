function compra(preco, quantidade, desconto = 0) {
    let total = preco * quantidade;
    total = total - (total * desconto / 100);
    return total;
}
