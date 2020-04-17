const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// 2.1
const idades = [];
const addIdades = usuarios.map(function ({ idade }) {
    idades.push(idade);
})
console.log(idades);


// 2.2
const rocketseat = usuarios.filter(function ({ empresa, idade }) {
    return empresa === 'Rocketseat' && idade > 18;
})
console.log(rocketseat);


// 2.3
const google = usuarios.find(function ({ empresa }) {
    return empresa === 'Google';
})
console.log(google);


// 2.4
const dobroIdades = [];
const dobro = usuarios.map(function ({ nome, idade, empresa }) {
    idade2 = idade * 2;
    if(idade2 <= 50){
        dobroIdades.push({ nome, idade2, empresa });
    }
}
);
console.log(dobroIdades);