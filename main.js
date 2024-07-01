const form = document.getElementById('form-atividade');
const contatosNome = [];
const contatosNumero = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaQuantidadeContatos();
});

function adicionaLinha(){

    const inputNomeContato = document.querySelector('#nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (contatosNome.includes(inputNomeContato.value)){
        alert(`O contato: ${inputNomeContato.value} já foi adicionado.`);
    } else {
        contatosNome.push(inputNomeContato.value);
        contatosNumero.push(Number(inputNumeroContato.value));
        
        let linha = '<tr>';
        linha += `<td> ${inputNomeContato.value}</td>`;
        linha += `<td> ${inputNumeroContato.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;

        alert(`Contato adicionado com sucesso!`)
    
    };

}

function atualizaTabela(){

    const corpoTabela = document.getElementById('tbody');
    corpoTabela.innerHTML = linhas;

};

function atualizaQuantidadeContatos(){

    let QuantidadeContatos =  contatosNome.length

    document.getElementById('NContatos').innerHTML = QuantidadeContatos;

}

