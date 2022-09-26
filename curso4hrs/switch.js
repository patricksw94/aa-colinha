//Switch

let permissao;
permissao = 'gerente';

switch (permissao) {
    case 'comum':
        console.log('usuário comum');
        break;

    case 'gerente':
        console.log('usuário gerente');
        break;

        default:
            console.log('Usuário não reconhecido!');
}
