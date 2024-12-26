async function buscarCEP(cep) {

    let url = `https://viacep.com.br/ws/${cep}/json/`;

    const resposta = await fetch(url);
    const json = await resposta.json();

    return json; // ou console.log(buscarCEP);

}

// consumindo a função
async function executar() {
    let resultado = await buscarCEP('07075140')
    console.log(resultado);
}
executar();

