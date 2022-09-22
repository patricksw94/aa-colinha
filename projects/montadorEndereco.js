// criar objeto endereco que contem:
// rua
// cidade
// cep
// exibirEndereco(endereco)

let  endereco = {
    rua: 'a',
    cidade: 'RJ',
    cep: 'c'
};

function exibirEndereco(endereco) {
    for (let chave in endereco)
    console.log(chave, endereco[chave]); //pega os valores indexado de chave
}

exibirEndereco(endereco);