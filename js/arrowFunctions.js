const arr = [1, 3, 4, 5, 8, 9];

// Essa função abaixo será transformada em Arrow Function
// const newArr = arr.map(function(item, index) {
//     return item + index;
// });

// Primeiro removemos a palavra function e colocamos => após o ()
// const newArr = arr.map((item) => {
//     return item * 2;
// });

// Depois podemos retirar os () de item porque só tem um parâmetro
// const newArr = arr.map(item => {
//     return item * 2;
// });

// E retiramos as chaves e o return
// const newArr = arr.map(item => item * 2);

// console.log(newArr);

//=================================================================================================

// Podemos criar função assim
// const teste = () => {
//     return "qualquer coisa";
// }
// ou
// const teste = () => "qualquer coisa";


// console.log(teste());

//=================================================================================================

// Para a função retornar um objeto precisamos colocar entre ()
// const teste = () => ({nome: 'Amauri'});

// console.log(teste());   // retorna {nome: "Amauri"}

//=================================================================================================

// Função com parâmetros com valores padrão (default), assim se não for passado algum valor ou
// somente um, a função assumirá o valor padrão para o parâmetro
const soma = (a = 3, b = 6) => a + b;

console.log(soma(1));   // retornará 1 + 6 = 7
console.log(soma());    // retornará 3 + 6 = 9

//=================================================================================================
