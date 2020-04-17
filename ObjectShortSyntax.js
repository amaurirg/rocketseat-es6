// Object Short Syntax 
// é uma sintaxe curta para o objeto, usada quando a propriedade e o valor tem o mesmo nome

const nome = 'Amauri';
const idade = 45;

// Esse objeto pode ser escrito conforme abaixo, sem duplicar chave: valor
// const usuario = {
//     nome: nome,
//     idade: idade,
//     cidade: 'Praia Grande',
// }

const usuario = {
    nome,
    idade,
    cidade: 'Praia Grande',
}

console.log(usuario);
