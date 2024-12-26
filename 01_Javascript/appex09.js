let dados = require('./dados/listaDados');

let listaCursos = dados.cursos;

// gerar uma nova lista de cursos com base na lista original
let novaLista = listaCursos.map((elemento, indice) => {
    return {
        chave: indice + 1,
        curso: elemento.descricao,
        ativo: elemento.status ? 'Sim' : 'Não'
    }
});

console.log(novaLista);