// SPREAD
// Passa todos os dados de um objeto para outro local

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [ ...arr1, ...arr2 ];
console.log(arr3);


// Para alterar somente um item no objeto
const usuario1 = {
    nome: 'Amauri',
    idade: 45,
    cidade: 'Praia Grande',
};

const usuario2 = { ...usuario1, nome: 'Giovani' };
console.log(usuario2);