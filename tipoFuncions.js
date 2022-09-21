// Realizar uma tarefa, que não devolva nada
function dizerNome() {
    console.log('Patrick');
}

dizerNome();

// Faz um cálculo ou operação e retorna algo
function MultiplicarPorDois(valor) {
    return valor * 2;
}

console.log(MultiplicarPorDois(5));

let resultado = MultiplicarPorDois(5);

console.log(resultado); // resultado é 10 pois a função multiplica valor por 2