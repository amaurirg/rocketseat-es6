import axios from 'axios';

// Retornando os dados de usuário do Github
class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        }
        catch (err) {
            console.warn('Erro ou usuário não encontrado!');
        }
    }
}

Api.getUserInfo('amaurirg');