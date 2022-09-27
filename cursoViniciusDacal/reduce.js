const produtos = [
    { id: 1, nome: 'detergente', valor: 2.00, categoria: 'limpeza'},
    { id: 2, nome: 'amaciante', valor: 6.50, categoria: 'limpeza'},
    { id: 3, nome: 'pão', valor: 2.00, categoria: 'alimento'},
    { id: 4, nome: 'queijo', valor: 7.00, categoria: 'alimento'},
    { id: 5, nome: 'leite', valor: 2.20, categoria: 'alimento'},
];



const total = produtos.reduce((acc, p) => acc + p.valor, 0);     //pro reduce precisa tmb passar uma função de callback,
                                                              // acc = acumulado*, colocando 1 como indice de valor inicial do reduce
console.log(total);                                           // reduce pega o primeiro e segundo elemento do array
                                                              // ele ta somando todos os valores a partir do valor 0