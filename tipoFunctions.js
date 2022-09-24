// Realizar uma tarefa, que não devolva nada
function dizerNome() {
    console.log('Patrick');
}

dizerNome();               // se não chama-la, não funciona!

// Faz um cálculo ou operação e retorna algo
function MultiplicarPorDois(valor) {
    return valor * 2;
}

console.log(MultiplicarPorDois(5));

let resultado = MultiplicarPorDois(10);

console.log(resultado);     // resultado é 20 pois a função multiplica valor por 2