//declarando variáveis
var curso = 'Javascript'; //visibilidade global
let nome = 'Thais Santos Hello World!'; //visibilidade bloco
let ch = 186;
let st = true;
let verifica = ch < 100;

let lista = ['Java', 'Oracle', 'Angular', 100];
let empresa = {
    descricao: 'Avanade',
    cidade: 'Recife',
    ano: 2024,
    funcionarios: ['Ana', 'Miguel', 'Jeferson']
};
let empresaJson = JSON.stringify(empresa);

console.log(nome, '-', typeof (nome));
console.log(curso, '-', typeof (curso));
console.log(ch, '-', typeof (ch));
console.log(st, '-', typeof (st));
console.log(verifica, '-', typeof (verifica));
console.log(lista, '-', typeof (lista));
console.log(empresa, '-', typeof (empresa));
console.log(empresaJson);