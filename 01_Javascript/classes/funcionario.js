// o uso de classes no JS faz parte de uma sintaxe conhecida como 'sugar sintax'
class Funcionario {

    // função especial, executada no momento em que o objeto da classe é executado. 
    // Sua execução é implícita
    constructor() {
        this.atribuir('desconhecido', 18, 'desconhecido', 2000);
    }

    atribuir(nome, idade, cargo, salario) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
        this.salario = salario;
    }
    mostrarDados() {
        return `Nome: ${this.nome}\nIdade: ${this.idade}\n` +
            `Cargo: ${this.cargo}\nSalário: ${this.salario}`;
    }

}

module.exports = Funcionario;