let listaDeAmigos = [];
let nomeAmigo = document.querySelector('input');

function adicionarAmigo() {
    let nome = nomeAmigo.value.trim(); // Pega o valor digitado e remove espaços em branco

    if (nome === '') {
        alert("Por favor, insira um nome.");
    } else {
        if (listaDeAmigos.includes(nome)) {
            alert("Nome repetido.");
        } else {
            listaDeAmigos.push(nome);
            exibirNomeAmigo('ul', listaDeAmigos); // Atualiza a exibição
        }
    }

    limparCampo();
}

function limparCampo() {
    nomeAmigo.value = '';
}

function exibirNomeAmigo(tag, array) {
    let campo = document.querySelector(tag);
    campo.innerHTML = ''; // Limpa o conteúdo anterior

    // Adiciona cada nome como item de lista
    array.forEach(function (nome) {
        let li = document.createElement('li');
        li.textContent = nome;
        campo.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("A lista está vazia.");
        return;
    }

    let sorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    
    let campoResultado = document.getElementById('resultado');
    campoResultado.innerHTML = `Amigo sorteado: ${sorteado}`;
}
