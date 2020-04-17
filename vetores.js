const arr = [1, 3, 4, 5, 8, 9];

// MAP
// percorre arr obtendo o item e a posição (index)
const newArr = arr.map(function(item, index) {
    return item + index;
});

console.log(newArr);


// REDUCE
// soma os itens e retorna o total
// na primeira vez o total será 0 e next será 1
// na segunda vez o total será 1 e next será 3
const sum = arr.reduce(function(total, next) {
    return total + next;
});

console.log(sum);


// FILTER
// filtrará somente os números pares
const filter = arr.filter(function(item) {
    return item % 2 === 0;
})

console.log(filter);



// FIND
// procura uma informação no array
// no exemplo verifica se existe o 3 e retorna 3 porque o return será true
// se fosse return item === 2; retornaria undefined
const find = arr.find(function(item) {
    return item === 3;
})

console.log(find);