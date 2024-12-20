let calcularDias = require('./funcoes/diasRestantes')

// obtendo os parâmetros de entrada
let dia = ProcessingInstruction.argv[2];
let mês = ProcessingInstruction.argv[3];
let ano = ProcessingInstruction.argv[4];


let dias = calcularDias(dia, mes, ano);
console.log(dias);