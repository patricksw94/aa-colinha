// exercício nota escolar
// obter a média a partir de um array

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const array = [70, 70, 80];

console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {
    const media = calcularMedia(notas);   // const media passa a função calcularMedia com valor de notas

    if (media < 59) return 'F';
    if (media < 69) return 'D';
    if (media < 79) return 'C';
    if (media < 89) return 'B';
    return 'A';
}

function calcularMedia(array) {
    let soma = 0;
    for (let valor of array) {           //loop for que é o loop usado em array
        soma += valor;    
    }
   return soma/(array.length);          //soma dívidido pelo tamanho do array 
}