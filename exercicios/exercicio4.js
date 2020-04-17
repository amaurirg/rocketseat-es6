// 4.1 Desestruturação simples
// A partir do seguinte objeto:
// const empresa = {
//     nome: 'Rocketseat',
//     endereco: {
//         cidade: 'Rio do Sul',
//         estado: 'SC',
//     }
// };

// const { nome, endereco: { cidade }, endereco: { estado } } = empresa;

// console.log(nome);
// console.log(cidade);
// console.log(estado);


// 4.2 Desestruturação em parâmetros
// Na seguinte função:
// function mostraInfo(usuario) {
//     return `${usuario.nome} tem ${usuario.idade} anos.`;
//    }
// mostraInfo({ nome: 'Diego', idade: 23 })

const {nome, idade} = (usuario) => {
 return `${nome} tem ${idade} anos.`;
}
console.log({ nome: 'Diego', idade: 23 });
