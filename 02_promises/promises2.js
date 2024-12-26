function getPromise() {
    return new Promise((resolve, reject) => {

        let x = Math.random(); // gera um número aleatório entre 0 e 1
        if (x > 0.5) {
            resolve('Valor calculado: ' + x);
        } else {
            reject('Valor inválido: ' + x);
        }
    });
}

module.exports = getPromise;