// factory functions (função de fábrica)
// factory functions encapsula informação dentro de um método que cria o objeto

const celular = {
    marcaCelular : 'Lg',
    tamanhoTela: {
        vertical: 155,
        horizontal: 74
    },
    capacidadeBateria: 5000,
    ligar: function(){
        console.log("fazendo ligação...")
    }
}

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log("fazendo ligação...")
        }
    }
}

const celular1 = criarCelular('Zenfone', 5.5, 5000);
console.log(celular1);