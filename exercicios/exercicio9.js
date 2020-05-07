import axios from 'axios';
// function getUserFromGithub(user) {
//     axios.get(`https://api.github.com/users/${user}`)
//         .then(response => {
//             console.log(response.data);
//         })
//         .catch(err => {
//             console.log('Usuário não existe');
//         })
// }
// getUserFromGithub('diego3g');
// getUserFromGithub('diego3g124123');


class Api {
    static async getUserFromGithub(user) {
        try {
            const response = await axios.get(`https://api.github.com/users/${user}`);
            console.log(response);
        }
        catch (err) {
            console.log('Usuário não encontrado!');
        }
    }
}

Api.getUserFromGithub('amaurirg');
Api.getUserFromGithub('amaurirgERRADO');
