/*
    a função deste arquivo receberá três parâmetros:
    dia, mês, ano

    Com base nestas informações, determinar quantos dias restam para terminar o ano
*/

module.exports = function (dia, mes, ano) {

    // produzir os parâmetros como tipos numéricos inteiros
    dia = parseInt(dia)
    mes = parseInt(mes)
    ano = parseInt(ano)

    if (mes < 1 || mes > 12) {
        throw new Error("Mês inválido");
    }
    const meses = [31, ano % 4 == 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // if(ano % 4 == 0) {
    //     meses[1] = 29;
    // } else {
    //     meses[1] = 28;
    // }

    if (dia < 1 || dia > meses[mes - 1]) {
        throw new Error("Dia inválido para o mês selecionado.");
    }

    let diasRestantes = meses[mes - 1] - dia;

    for (let i = mes; i < meses.length; i++) {
        diasRestantes = diasRestantes + meses[i];
    }
    return diasRestantes;
}