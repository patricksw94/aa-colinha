const celular = {
    marcaCelular : 'Lg',
    tamanhoTela: {
        vertical: 155,
        horizontal: 74
    },
    ligar: function(){
        console.log("fazendo ligação...")
    }
}

const novoObjeto = Object.assign({       //método serve pra adicionar novas propriedades de um objeto
    bateria: 5000
}, celular);
console.log(novoObjeto);

const objeto2 = {...celular};  //spread operator usado para clonar todas as propriedades de um objeto
console.log(objeto2);