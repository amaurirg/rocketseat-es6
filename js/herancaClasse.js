class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}
class TodoList extends List {
    constructor() {
        // chama o constructor da classe pai (List)
        super();
        this.usuario = 'Amauri';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

// variável que armazenará a lista
const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novo Todo');
}

MinhaLista.mostraUsuario();