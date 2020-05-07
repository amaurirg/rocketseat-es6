// REST
// Pega o resto das propriedades

const usuario = {
    nome: 'Amauri',
    idade: 45,
    cidade: 'Praia Grande'
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);


// Array
const arr = [1, 2, 3, 4];

// Quando for array a desestruturação será em []
const [ a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);


// Function
// function soma(a, b, c) {
//     return a + b + c;
// }

// A função acima com REST
function soma(...params) {
    // somará todos os parâmetros passados com reduce
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 7, 4, 2, 8));

// Retornando somente os params
function parametros(a, b, ...params) {
    return params;
}

console.log(parametros(1, 3, 7, 4, 2, 8));
