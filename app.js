//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let guardarNomes = [];

function limparCampo() {
    document.getElementById('amigo').value = ''
}

function adicionarAmigo() {
    let nomes = document.getElementById('amigo').value;

    if (nomes == '') {
        alert('Você precisa escrever um nome')
    } else {
        guardarNomes.push(nomes);
        console.log(guardarNomes);
    }
    limparCampo();
}



