// o uso de classes no JS faz parte de uma sintaxe conhecida como 'sugar sintax'
class Funcionario {

    // função especial, executada no momento em que o objeto da classe é executado. 
    // Sua execução é implícita
    constructor(nome = 'Desconhecido', idade = 18, cargo = 'Desconhecido', salario = 2000) {

        if (nome == undefined || idade == undefined || cargo == undefined || salario == undefined) {
            throw new Error('Dados incorretos!');
        }

        this.atribuir(nome, idade, cargo, salario);
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