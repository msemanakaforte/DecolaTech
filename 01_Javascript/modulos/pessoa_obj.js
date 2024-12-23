let pessoa = {
    atribuir: function (nome, idade) {
        this.nome = nome;
        this.idade = idade;
    },
    verificar: function () {       // retornar verdadeiro ou falso se a pessoa for maior de idade
        return this.idade >= 18;
    },
    mostrar: function () {       // no operador ternário, o primeiro tem que retornar verdadeiro ou falso, no caso foi usado o "this.verificar"
        let status = this.verificar() ? "Maior de idade" : "Menor de idade";
        return `Nome: ${this.nome}\nIdade: ${this.idade}\n${status}`;

        //mostrar na tela não é a mesma coisa que retornar. As vezes a operação só retorna um valor sem necessariamente mostrar na tela
    }
}

module.exports = pessoa;






// atribuir : function() {
//     this.nome = "Milena";
//     this.idade = 25;
// }
// verificar : function() {       // retornar verdadeiro ou falso se a pessoa for maior de idade
//     if(this.idade >= 18) {
//         return true;
//     }
//     return false;
// }