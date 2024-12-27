async function buscarCEP(cep) {
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    const resposta = await fetch(url);
    const json = await resposta.json();

    return {
        logradouro: json.logradouro,
        bairro: json.bairro,
        cidade: json.localidade
    }
}

function executar() {
    // execução do evento click do botão
    document.getElementById('btn_enviar').addEventListener('click', async function () {

        // obtendo o valor do cep
        let cep = document.getElementById('cep').value;
        let resposta = await buscarCEP(cep);

        // atribuir o resultado para os campos correspondentes
        document.getElementById('logradouro').value = resposta.logradouro;
        document.getElementById('bairro').value = resposta.bairro;
        document.getElementById('cidade').value = resposta.cidade;
    });
}
executar();