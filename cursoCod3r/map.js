const array = [
    { nome: '...', preco: 23.67, desconto: 0.2},
    { nome: '...', preco: 123.60, desconto: 0.3},
    { nome: '...', preco: 83.57, desconto: 0.5},
    { nome: '...', preco: 3.70, desconto: 0.1},
    { nome: '...', preco: 30.67, desconto: 0.5},
    { nome: '...', preco: 203.67, desconto: 0.15}
];

function getCusto(precoComDesconto) {
    return parseInt(precoComDesconto * 0.3)
}
                                                    // transformando array de objetos em array de números
function getPrecoComDesconto(produto) {
    return produto.preco * ( 1 - produto.desconto)
}

const resultado = array
.map(getPrecoComDesconto)
.map(getCusto)
console.log(resultado);