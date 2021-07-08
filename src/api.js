import axios from 'axios';

// cria a configuração do axios com a baseURL
const api = axios.create({
    baseURL: 'https://api.github.com',
});

export default api;
