 // loop while
var contadorB = 0;                                      
while (contadorB < 5) {
    if (contadorB === 3) {
        break;
    }
    console.log(contadorB);
    ++contadorB;
}

 // loop while
var contador = 0;

while (contador < 100) {
    if(contador % 3 === 0 && contador % 5 === 0) {
        console.log(`${contador} - PING PONG`);
    } else if (contador % 3 === 0) {
        console.log(`${contador} - PING`);
    } else if (contador % 5 === 0) {
        console.log(`${contador} - PONG`);
    }
    ++contador;
}

//
for (var contador = 0; contador < 10; contador++) {
    console.log(contador);
}

//
var numerosAleatorios = [3, 5, 10, 2, 19, 21, 13];
for (var contador = 0; contador < numerosAleatorios.length; contador ++) {
    console.log(`${contador} - ${numerosAleatorios[contador]}`);  //poderia ser [2] que seria 10
}

// sem contador pq fica menor
for (var i = numerosAleatorios.length - 1; i >= 0; i--) {
    console.log(`Posição ${i} com decremento: ${numerosAleatorios[i]}`);
}

//
var i = 0;  // pode passar dentro ou fora, da no mesmo, boas práticas, passam dentro do for
for (var i = 0; i < numerosAleatorios.length;) {
    console.log(`Sem valor inicial e incremento: ${
        numerosAleatorios[i]}`);
        i++;
}

//
var condicao = true;
var contador = 1;

for(; condicao; ) {
    if (contador % 5 === 0) {
        condicao = false;
    }
    console.log(`condicao booleana simples: ${contador}`);
    ++contador;
}

//
for (var i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(`Utilizando break ${i}`);
}

//
for (var i = 0; i < 50; i++) {
    if (i % 2 === 0) {  // se não for multiplo de 2, então vai imprimir normalmente
        continue;       // para imprimir só os números pares é só mudar para !== diferente (se não for multiplo de 2, continue)
    }
    console.log('utilizando continue', i);
}

// for of
var numerosAleatoriosS = [3, 5, 10, 2, 19, 21, 13];  // for of é um atalho para um for comum
for (var num of numerosAleatoriosS) {
    console.log('for of', num);
}

// loop dentro de outro loop
for ( var i = 0; i <= 5; i++) {
    for (var j = 1; j <= 5; j++) {
        if (j % 2 === 0) {
            continue;
        }

        if(j > 5) {
            break;
        }
        console.log(`i: ${i}; j: ${j}`);
    }
}

//
for (var i = 0; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('PING PONG');
    } else if (i % 3 === 0) {
        console.log(i, 'PING');
    } else if (i % 5 === 0) {
        console.log(i, 'PONG');
    }
}