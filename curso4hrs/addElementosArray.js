const numeros = [1, 2, 3];

// início
numeros.unshift(0);
console.log(numeros);

// meio
numeros.splice(1, 0, 'a');
console.log(numeros);

// final
numeros.push(5);
console.log(numeros);