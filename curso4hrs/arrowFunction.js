const marcas = [
    {id: 1, nome: 'a'},
    {id: 2, nome: 'b'}
];

console.log(marcas.find(function(marca) {
    return marca.nome === 'a';
}));

/////////////////////////////////////////////////////////////////////

const marcas2 = [
    {id: 1, nome: 'a'},
    {id: 2, nome: 'b'}
];

console.log(marcas2.find(marca => marca.nome === 'a')); // sem parametros é só pôr () vazio