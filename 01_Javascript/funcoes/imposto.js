module.exports = function (valorSalario) {

    const valores = [0, 2259.2, 2826.65, 3751.05, 4664.68];
    const taxas = [0, 7.5, 15, 22.5, 27.5];

    let imposto = 0;
    let baseCalculo = valorSalario;

    for (let i = valores.length - 1; i >= 0; i--) {
        if (baseCalculo > valores[i]) {
            imposto = imposto + (baseCalculo - valores[i]) * taxas[i] / 100;
            baseCalculo = valores[i];
        }
    }
    return imposto;
}

// fazer um teste de mesa para entender a lógica do código, usando como base o site da receita
// rodar o código no appex02.js
