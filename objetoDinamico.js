const mouse = {
    cor: 'red',
    marca: '7dGaming'
}

mouse.velocidade = 5000;
mouse.trocarDPI = function () {
    console.log('mudando DPI');
}

delete mouse.velocidade;        // objetos são dinamicos, é possível deletar
delete mouse.trocarDPI;         // ou adicionar propriedades dentro dele
console.log(mouse.velocidade);