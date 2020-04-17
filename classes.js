class Pessoa {
    constructor() {
        this.pessoas = [];
    }

    addPeople(people) {
        this.pessoas.push(people);
    }
    
    mostraLista() {
        console.log(this.pessoas);
    }
}


listaPessoas = new Pessoa();
listaPessoas.addPeople('Giovani');
listaPessoas.addPeople('Rossetti');

listaPessoas.mostraLista();