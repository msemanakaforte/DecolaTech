// exemplo de como seria uma classe escrita como função

function Funcionario(nome = 'Desconhecido', idade = 18, cargo = 'Desconhecido', salario = 2000) {

    if (nome == undefined || idade == undefined || cargo == undefined || salario == undefined) {
        throw new Error('Dados incorretos!');
    }
    this.atribuir(nome, idade, cargo, salario); //chamou o método

    // definiu o que ele é
    this.atribuir = function (nome, idade, cargo, salario) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
        this.salario = salario;
    }

    this.mostrarDados = function () {
        return `Nome: ${this.nome}\nIdade: ${this.idade}\n` +
            `Cargo: ${this.cargo}\nSalário: ${this.salario}`;
    }
}

module.exports = Funcionario;