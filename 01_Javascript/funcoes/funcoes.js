// forma tradicional
function calcularSoma(x, y) {
    //x = parseFloat(x);
    //y = parseFloat(y);

    if (typeof (x) != "number") {
        throw new Error("O parâmetro x deve ser numérico");
    }
    if (typeof (y) != "number") {
        throw new Error("O parâmetro y deve ser numérico");
    }

    return x + y;
}

// função anonima
let maiorValor = function (x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

// arrow function
let calcularSubtracao = (x, y) => {
    return x - y;
}

module.exports = { calcularSoma, maiorValor }