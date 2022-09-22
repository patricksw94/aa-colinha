// Operadores Aritiméticos/(matemáticos)
let salário = 100;

// +, -, *, /, **(exponencial)

// ++ --
let idade = 18;
console.log(++idade);

// operadores atribuição

let valorTecladoGamer = 100;
valorTecladoGamer += valorTecladoGamer; // ele mais ele mesmo += | -= ele menos ele mesmo
console.log(valorTecladoGamer);

// operadores ternário

let pontos = 100;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);

// Estritamente não igual (!==) | Não igual (!=)

// operadores lógicos

let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho; // usando && da false, usando || da true pois só precisa de um true
console.log(podeAplicar);

// Operador NOT (!)
let candidatoRecusado = !podeAplicar; // sem ! fica true
console.log(candidatoRecusado);