let dados = require('./dados/listaDados');

let empresa = dados.empresa;

console.log(empresa);
console.log(empresa.descricao);

let curso = dados.cursos[0];

console.log(curso);
console.log(dados.cursos[0]);

function mostrarCurso(course) {
    console.log(course);
}

mostrarCurso(dados.cursos[0]);

