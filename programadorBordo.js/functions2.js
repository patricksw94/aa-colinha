function Usuario() {
    this.nome = 'Patrick';
    this.idade = 28;
    this.soma = function(a, b) {
        return a + b;
    }
}

var usuario = new Usuario();
console.log(usuario);  // novo objeto referenciando uma function

// call
function Personagem(p1, p2, p3) {
    console.log('personagem this', this)
    console.log(p1, p2, p3)
}

var personagemThis = {
    nome: 'Patrick'
}

Personagem.call(personagemThis, 'param1', 123, [5])

// apply
Personagem.apply(personagemThis, [ 'param$$$', 321, [1, 2, 3]])

// bind
var pers = Personagem.bind(personagemThis, 'Olá', 'Mundo', '!!!')
pers('???')