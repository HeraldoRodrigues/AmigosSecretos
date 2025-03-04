//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// app.js

// app.js

let amigos = [];

function adicionarAmigo() {
  const amigoInput = document.getElementById("amigo");
  const nomeAmigo = amigoInput.value.trim();

  if (nomeAmigo !== "") {
    amigos.push(nomeAmigo);
    atualizarListaAmigos();
    amigoInput.value = ""; // Limpa o campo de entrada
  }
}

function atualizarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; // Limpa a lista antes de atualizar

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Adicione pelo menos dois amigos para o sorteio.");
    return;
  }

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpa o resultado anterior

  let sorteioValido = false;
  let sorteio = {};

  while (!sorteioValido) {
    const amigosEmbaralhados = embaralharArray(amigos.slice());
    sorteioValido = true;
    sorteio = {};

    for (let i = 0; i < amigos.length; i++) {
      if (amigos[i] === amigosEmbaralhados[i]) {
        sorteioValido = false;
        break; // Refaz o sorteio se alguém se sorteou
      }
      sorteio[amigos[i]] = amigosEmbaralhados[i];
    }
  }

  for (const amigo in sorteio) {
    const li = document.createElement("li");
    li.textContent = `${amigo} vai presentear ${sorteio[amigo]}`;
    resultado.appendChild(li);
  }
}

function embaralharArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
  }
  return array;
}