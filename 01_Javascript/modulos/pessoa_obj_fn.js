function executarOperacoes() {
    return {
        atribuir: function (nome, idade) {
            this.nome = nome;
            this.idade = idade;
        },
        verificar: function () {
            return this.idade >= 18;
        },
        mostrar: function () {
            let status = this.verificar() ? "Maior de idade" : "Menor de idade";
            return `Nome: ${this.nome}\nIdade: ${this.idade}\n${status}`;
        }
    }
}

module.exports = executarOperacoes;
