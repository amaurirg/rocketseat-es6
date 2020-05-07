import axios from 'axios';


// const buscaUsuario = user => {
//     axios.get(`https://api.github.com/users/${user}`)
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(err => {
//             console.log('Usuário não existe');
//         });
// }
// buscaUsuario('amaurirg');



class BuscaUsuario {
    static async getUserGitHub(user) {
        try {
            const response = await axios.get(`https://api.github.com/users/${user}`);
            console.log(response);
        }
        catch (err) {
            console.log('Usuário não encontrado!')
        }
    }
}

BuscaUsuario.getUserGitHub('amaurirg');
BuscaUsuario.getUserGitHub('amaurirgERRADO');
