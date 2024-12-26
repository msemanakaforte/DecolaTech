let cep = '07075140';
let url = `https://viacep.com.br/ws/${cep}/json/`;
//Fonte externa de dados, quando executada se conecta a internet

//A função fetch precisa de dois then's
// fetch(url)
//     .then(s => s.json())
//     .then(s => console.log(s));

fetch(url)
    .then(s => s.json())
    .then(s => {
        console.log(s.logradouro);
        console.log(s.bairro);
        console.log(s.uf);
        console.log(s.localidade);
    });