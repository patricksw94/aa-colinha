function escrevaMensagem(mensagem) {
    console.log(mensagem);
}

escrevaMensagem('Hello!');

function soma(a, b) {
    return a + b;
}
var restuladoSoma = soma(10, 5); // tmb poderia ser console.log(soma(10,5));
console.log(restuladoSoma);

// array e somar todos os elementos

function somaTudo(numeros) {
    var total = 0;

    for (var num of numeros) {
        total = total + num;
    }
    return total;
}

var arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var resultado = somaTudo(arrayNumeros);
console.log(resultado);

// função escrever endereço

function escreverEndereco(rua, cidade, pais, ...complementos) {
    console.log(rua);
    console.log(cidade);
    console.log(pais);
    console.log(complementos);
}

escreverEndereco('Rua xx', 'cidade xx', 'pais xx', 'cep xx', 'bloco xx');

//função auto executavel
(function autoExecuta(nome) {      //usada para proteger variaveis etc.
    console.log('Executei', nome);
}('Patrick'));

// função que armazena em uma variavel
var subtraiDoisNumeros = function subtrai(a, b) {
    return a - b;
;}

console.log(subtraiDoisNumeros(10,3));

//função anonima (anonima pq a function não tem nome!)
var subtraiDoisNumerosAA = function (a, b, c) {
    return a - b - c;
;}

console.log(subtraiDoisNumerosAA(10, 3, 2));

//função callback
function somaCallback(a, b, fnCallback) {
    return fnCallback(a + b);
}

var multiplica = function(total) {  //função anonima passada como parametro do somaCallback, tmb podendo passar como variavel
    return total * 2;                         
};

console.log(somaCallback(10, 3, multiplica));

console.log(somaCallback(5, 2, function(total) {
    return total + 20;
}))

console.log(somaCallback(23, 11, function(total) {
    return total / 2;
}))

// função objetos com default padrão
function escreveNome(nome = 'Patrick', idade = 28) {
    console.log(nome);
    console.log(idade);
}

function escreveNome();