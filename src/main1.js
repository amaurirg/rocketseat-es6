const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);  // aguarda 2 segundos e executa
});


// minhaPromisse().then(response => {
//     console.log(response);
// });

/*
// A função acima com async await:
// Toda vez que tiver await, a próxima linha aguardará a instrução terminar
// Podemos ter vários await dentro de uma função que serão executadas uma por vez
async function executaPromise() {
    const response1 = await minhaPromise();
    console.log(response1);
    const response2 = await minhaPromise();
    console.log(response2);
    const response3 = await minhaPromise();
    console.log(response3);

    // OU

    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());

    // seria o mesmo que:
    // minhaPromisse().then(response => {
    //     console.log(response);
    // });

    // seria o mesmo que:
    // minhaPromisse().then(response => {
    //     console.log(response);
    // });

    // seria o mesmo que:
    // minhaPromisse().then(response => {
    //     console.log(response);
    // });
}

executaPromise();
*/

// Transformando a função acima para arrow functions:
const executaPromise = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

executaPromise();