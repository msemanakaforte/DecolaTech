let pessoa = require('./modulos/pessoa_obj_fn');

let app = pessoa();

app.atribuir('Miguel', 15);
console.log(app.mostrar());
