import axios from 'axios';


// class Github {
//     static getRepositories(repo) {
//         axios.get(`https://api.github.com/repos/${repo}`)
//             .then(response => {
//                 console.log(response.data);
//             })
//             .catch(err => {
//                 console.log('Repositório não existe');
//             })
//     }
// }
// Github.getRepositories('amaurirg/omnistack');
// Github.getRepositories('amaurirg/dslkvmskv');

class Github {
    static async getRepo(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response);
        }
        catch (err) {
            console.log('Repositório não encontrado!');
        }
    }
}

Github.getRepo('amaurirg/omnistack');
Github.getRepo('amaurirg/djfklbhdjfbds');