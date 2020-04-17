const usuario = {
    nome: 'Amauri',
    idade: 45,
    endereco: {
        cidade: 'Praia Grande',
        estado: 'SP',
    },
};

// console.log(usuario);

// DESESTRUTURAÇÃO
// Para pegar somente nome e idade colocamos entre {}
// const { nome, idade } = usuario;

// se quiser a cidade será assim
// const { nome, idade, endereco: { cidade } } = usuario;

// console.log(nome);
// console.log(idade);
// console.log(cidade);


// Agora com função
// function mostraNome(usuario) {
//     console.log(usuario.nome);
// }

// DESESTRUTURAÇÃO
function mostraNome({ nome, idade }) {
    console.log(nome, idade);
}

mostraNome(usuario);
