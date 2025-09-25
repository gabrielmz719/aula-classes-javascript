class Produto {
    constructor(nome, preco, quantidadeEstoque) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEstoque = quantidadeEstoque;
    }
}

class itemPedido {
    constructor(produto, quantidade) {
        this.produto = produto;
        this.quantidade = quantidade;
    }
    calcularTotal() {
        return this.produto.preco * this.quantidade;
    }
}


class Pedido {
    constructor() {
        this.itens = [];
        this.pagamento = null;
    }

    adicionarItem(item) {
        this.itens.push(item);
    }

    calcularTotal() {
        return this.itens.reduce((total, item) => total + item.calcularTotal(), 0);
    }

    definirPagamento(pagamento) {
        this.pagamento = pagamento;
    }
}

class Pagamento {
  constructor(valor) {
    this.valor = valor;
  }
}

class Dinheiro extends Pagamento {}
class Cheque extends Pagamento {}
class Cartao extends Pagamento {}
