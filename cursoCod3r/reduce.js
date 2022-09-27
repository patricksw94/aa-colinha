const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function media(acc, num) {    //a, b || a de acumulador = acc, b é o elemento atual = num 
    console.log(acc, num)     // acc para mostrar os calculos e num para mostrar o numero que foi chamado
    const novoTotal = acc.total + num
    const novaQtde = acc.qtde + 1
    return {
        total: novoTotal,
        qtde: novaQtde,
        media: novoTotal / novaQtde
    }
}

const valorInicial =  {total: 0, qtde: 0, media: 0}
const valorFinal = numeros.reduce(media, valorInicial)

console.log(valorFinal.media)