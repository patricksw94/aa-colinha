// criar array de objetos de faixa de preço para que ela possa
// ser usado em um site igual o mercado livre

// primeira opção
let faixas = [              // tooltip exibe o valor com melhor visibilidade num site ao passar a seta em cima
    {tooltip: 'até R$700', minimo: 0, maximo: 700},
    {tooltip: 'de R$700 a R$1000', minimo: 700, maximo: 1000},
    {tooltip: 'R$1000 ou mais', minimo: 1000, maximo: 10000}
];

// segundao opção factory function
function criarFaixaPreco(tooltip, minimo, maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criarFaixaPreco('a', 1, 100),
    criarFaixaPreco('b', 100, 1000),
    criarFaixaPreco('c', 1000, 10000)
]

// terceira opção constructor function
function FaixaPreco(tooltip, minimo, maximo) {
    this.tooltip = tooltip;
    this.minimo = minimo;
    this.maximo = maximo;
}

let faixas3 = [
    new FaixaPreco('d', 10, 20),
    new FaixaPreco('e', 20, 30),
    new FaixaPreco('f', 40, 50)
];

console.log(faixas);
console.log(faixas2);
console.log(faixas3);