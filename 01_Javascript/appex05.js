const Funcionario = require('./classes/funcionario');

// instanciando a classe
// o construtor chama o atribuir, porém se tiver outro atribuir abaixo, a ultima chamada que vai prevalecer.
let p = new Funcionario('Gabriela', 30, 'Analista', 5000);   // construtor executado


// se eu esquecer de atribuir algum valor, ao rodar o código irá aparecer como "Undefined"
p.atribuir('Antonio Carlos', 40, 'Motoboy', 3000);
console.log(p.mostrarDados());

// undefined: tem referência mas não tem nenhum valor atribuido a ele
// null: não tem referência