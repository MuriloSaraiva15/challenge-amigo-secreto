let listaAmigos = [];

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
    document.getElementById('amigo').value = ''; //Limpa o campo do nome
    novaLista();
}

// Funcao atualizar lista
function novaLista() {
    let lista = document.getElementById('listaAmigos'); // Recebe da listaAmigos
    lista.innerHTML = ''; //Limpa lista

    for (let i = 0; i < listaAmigos.length; i++) { // Para cada amigo
        let li = document.createElement('li'); // Cria um novo elemento <li>
        li.innerText = listaAmigos[i]; // Sincroniza nome com elemento <li>
        lista.append(li);  //Adiciona <li> a lista

    }
}

// Função para sortear um amigo
function sortearAmigo() {
    if (listaAmigos.length < 3) { // Se a lista tiver menos que 3 nomes
        alert('Insira pelo menos 3 nomes'); // Alerta para inserir mais
        return;
    }

    let sorteador = Math.floor(Math.random() * listaAmigos.length); //Gerar um índice aleatório para o sorteio
    let nomeSorteado = listaAmigos[sorteador]; //Obter o nome sorteado usando o índice aleatório

    document.getElementById('resultado').innerHTML = `Amigo sorteado: <strong>${nomeSorteado}</strong>`;  // Exibir o resultado no elemento com id 'resultado'

    document.getElementById('resultado').innerHTML = ''; // Limpa o resultado anterior
}