const notas = [7.1, 8.3, 6.3, 7.7, 9.1, 4.3];

function aprovado(nota) {
    return nota >= 7
}

const resultadoNotas = notas.filter(aprovado)
console.log(resultadoNotas)

//////////////////////////////////////////

const produtos = [
    { nome: '...', preco: 23.67, desconto: 0.2},
    { nome: '...', preco: 123.60, desconto: 0.3},
    { nome: '...', preco: 83.57, desconto: 0.5},
    { nome: '...', preco: 3.70, desconto: 0.1},
    { nome: '...', preco: 30.67, desconto: 0.5},
    { nome: '...', preco: 2030.67, desconto: 0.15}
];

function getCusto(precoComDesconto) {
    return parseInt(precoComDesconto * 0.3)
}
                                                    // transformando array de objetos em array de números
function getPrecoComDesconto(produto) {
    return produto.preco * ( 1 - produto.desconto)
}

function altoCusto(produto) {
    return produto.preco >= 1000
}

const resultado = produtos
.filter(altoCusto)
.map(getPrecoComDesconto)
.map(getCusto)
console.log(resultado);