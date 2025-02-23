let listaAmigos = [];
let sorteados = []; // Lista para armazenar os nomes já sorteados

// Funcao para adicionar nomes
function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;
    nomeAmigo = nomeAmigo.trim(); // Remove espaços em branco

    // Impede que insiram um nome vazio
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    // Impede nomes duplicados
    if (listaAmigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    listaAmigos.push(nomeAmigo); // Adiciona o nome ao array
    document.getElementById('amigo').value = ''; // Limpa o campo do nome
    novaLista();
}

// Funcao atualizar lista
function novaLista() {
    let lista = document.getElementById('listaAmigos'); // Recebe da listaAmigos
    lista.innerHTML = ''; // Limpa lista

    for (let i = 0; i < listaAmigos.length; i++) { // Para cada amigo
        let li = document.createElement('li'); // Cria um novo elemento <li>
        li.innerText = listaAmigos[i]; // Sincroniza nome com elemento <li>
        lista.append(li);  // Adiciona <li> a lista
    }
}

// Função para sortear um amigo
function sortearAmigo() {
    if (listaAmigos.length < 3) { // Se a lista tiver menos que 3 nomes
        alert('Insira pelo menos 3 nomes'); // Alerta para inserir mais
        return;
    }

    if (sorteados.length === listaAmigos.length) {
        alert('Todos os nomes já foram sorteados! Reiniciando o jogo...');
        reiniciarJogo();
        return;
    }

    let sorteador;
    let nomeSorteado;

    // Garante que o nome sorteado não se repita
    do {
        sorteador = Math.floor(Math.random() * listaAmigos.length); // Gerar um índice aleatório para o sorteio
        nomeSorteado = listaAmigos[sorteador]; // Obter o nome sorteado usando o índice aleatório
    } while (sorteados.includes(nomeSorteado));

    sorteados.push(nomeSorteado); // Adiciona o nome sorteado à lista de sorteados

    document.getElementById('resultado').innerHTML = `Amigo sorteado: <strong>${nomeSorteado}</strong>`;  // Exibir o resultado no elemento com id 'resultado'
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    listaAmigos = []; // Limpa o array de nomes
    sorteados = []; // Limpa a lista de nomes sorteados
    document.getElementById('listaAmigos').innerHTML = ''; // Limpa a lista de nomes exibida na tela
    document.getElementById('resultado').innerHTML = ''; // Limpa o resultado do sorteio

    alert('Jogo reiniciado com sucesso!');
}