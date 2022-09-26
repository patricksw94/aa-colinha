// verbo + substantivo

let corSite = "azul";

function resetaCor(cor, tonalidade) { // resetaCor recebe a variavel cor e tonalidade (entrada de dados)
    corSite = cor + ' ' + tonalidade;       // corSite recebe cor e tonalidade como parametro da função
};

console.log(corSite);
resetaCor("vermelho", "claro");
console.log(corSite);

// // // // // // // // // // // // // // // // // // // //

let corCeu = "azul";

function mudarClima(cor, tonalidade) {
    corCeu = cor + ' ' + tonalidade;
};

console.log(corCeu);
mudarClima("rosa", "vermelho");
console.log(corCeu);
