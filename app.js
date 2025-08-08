//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let guardarNomes = [];

function limparCampo() {
    document.getElementById('amigo').value = ''
}

function adicionarAmigo() {
    let nomes = document.getElementById('amigo').value;

    if (nomes == '') {
        alert('Você precisa escrever um nome');
    } else {
        guardarNomes.push(nomes);
        console.log(guardarNomes);
    }
    limparCampo();
    atualizarLista();
}

function atualizarLista() {
    let atualizar = document.getElementById('listaAmigos');
    atualizar.innerHTML = '';

    for (let i = 0; i < guardarNomes.length; i++) {
        let item = document.createElement('li');
        item.textContent = guardarNomes[i];
        atualizar.appendChild(item);
    }
}

function sortearAmigo() {
    if (guardarNomes.length === 0) {
        alert('Você precisa adicionar ao menos um nome');
        return;
    }

    let indice = Math.floor(Math.random() * guardarNomes.length);
    let nomeSorteado = guardarNomes[indice];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    let visualizarSorteado = document.createElement('li');
    visualizarSorteado.textContent = `O amigo secreto sorteado é: ${nomeSorteado}!`;

    let atualizar = document.getElementById('listaAmigos');
    atualizar.innerHTML = '';
    
    resultado.appendChild(visualizarSorteado);
}

