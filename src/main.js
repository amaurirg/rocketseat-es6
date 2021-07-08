import api from './api';


class App {
    constructor() {
        this.repositories = [];
        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository]');
        this.listEl = document.getElementById('repo-list');
        this.registerHandlers();
    }

    // Registra os eventos quando o usuário submeter o form
    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    // recebe true ou false se está carregando o repositórios
    setLoading(loading = true) {
        if(loading === true) {
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando...'));
            loadingEl.setAttribute('id', 'loading');

            this.formEl.appendChild(loadingEl);
        } else {
            // se não estiver carregando remove o span
            document.getElementById('loading').remove();
        }
    }

    async addRepository() {
        // Para não recarregar a página
        event.preventDefault();
        
        const repoInput = this.inputEl.value;

        // se não tiver nada no input ele não retorna nada e sai da função
        if(repoInput.length === 0)
            return;

        // está true por padrão
        this.setLoading();

        try {
            const response = await api.get(`/repos/${repoInput}`);
            // console.log(response);
            const { name, description, html_url, owner: { avatar_url } } = response.data;
            // console.log(name, description, html_url, avatar_url );
    
            // como name = name (variável = valor), usaremos a sintaxe do ES6
            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url
            });
            
            // console.log(this.repositories);
            
            this.render();
        } catch (err) {
            alert('Repositório não encontrado!');
        }
        // precisamos retirar o span porque já carregou o repositório
        this.setLoading(false);
        // limpa o input
        this.inputEl.value = '';
    }

    // Apaga todo o conteúdo da lista e renderizar do zero, percorrendo o array
    render() {
        this.listEl.innerHTML = '';
        // percorre todo o array e não faz alterações como o map()
        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        })
    }
}

// executa a classe
new App();