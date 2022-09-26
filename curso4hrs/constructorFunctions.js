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

//Pascal Case - UmDoisTresQuatro
function Celular(marcaCelular, tamanhoTela, capacidadeBateria){//propriedades sendo passada como argumento pela função
    this.marcaCelular = marcaCelular,      //this serve para referênciar um objeto
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function() {
        console.log("Fazendo ligação...");
    }
}

const celular = new Celular('asus', 5.5, 5000); //new usada para instanciar todas as propriedades através de um paramêtro
console.log(celular);
