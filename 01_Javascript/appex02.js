let calcularImposto = require('./funcoes/imposto');

let irpf = calcularImposto(2000);

console.log("R$", irpf.toFixed(2))