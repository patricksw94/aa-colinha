// Loop for Loop

for(let i = 0; i < 5; i++) {
    if (i % 2 !== 0) {  // se resto de i = 2 e for diferente de 0, então imprimir i || % = módulos
        console.log(i);
    }
}

// While Loop

let i = 5;

while (i >= 1) {
    if(i % 2 !== 0) {
        console.log(i);
    }
    i--;
}

// Do... While

let u = 0; // usando u invés i, pra parar de dar erro
do { 
    console.log('digitando!'); // se esquecer o incremento, fica em loop!
    u++;                      //While verifica primeiro e executa dps, o Do executa primeiro e verifica depois!
} while (u < 10)

//loop for-of

const cores = ['Vermelho', 'Azul', 'Verde'];

for(let cor of cores) {
    console.log(cor);
}