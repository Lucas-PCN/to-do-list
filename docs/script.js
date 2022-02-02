const input = document.querySelector('#texto-tarefa');
const botaoGerador = document.querySelector('#criar-tarefa');
const lista = document.querySelector('#lista-tarefas');
const botaoLimpador = document.querySelector('#apaga-tudo');
const botaoRemovedor = document.querySelector('#remover-finalizados');
const botaoRemoveSelecionados = document.querySelector('#remover-selecionado');

// Adiciona um item à list
function addTask() {
  if (!input.value) {
    alert('Nenhuma tarefa adicionada!');
  } else {
    const listItem = document.createElement('li');
    listItem.innerText = input.value;
    listItem.classList.add('item');
    lista.appendChild(listItem);
    input.value = '';
  }
}

botaoGerador.addEventListener('click', addTask);

// Adiciona fundo cinza à task selecionada
function colorSelectedItem(e) {
  const selected = document.querySelector('.selected');
  if (selected !== null) {
    selected.classList.remove('selected');
  }
  e.target.classList.add('selected');
}

lista.addEventListener('click', colorSelectedItem);

// Faz com que o item clicado seja riscado, indicando que está completo
function completed(e) {
  e.target.classList.toggle('completed');
}

lista.addEventListener('dblclick', completed);

// Apaga todos os itens da lista
function cleanAll() {
  lista.innerHTML = '';
}

botaoLimpador.addEventListener('click', cleanAll);

// Remove os itens completos ao clicar no botão
function cleanCompleted() {
  const tarefasCompletas = document.querySelectorAll('.completed');
  for (let i = 0; i < tarefasCompletas.length; i += 1) {
    tarefasCompletas[i].remove();
  }
}

botaoRemovedor.addEventListener('click', cleanCompleted);

// Remove o item selecionado (aquele que possui o fundo cinza)
function removeSelectedTask() {
  const selected = document.querySelector('.selected');
  selected.remove();
}

botaoRemoveSelecionados.addEventListener('click', removeSelectedTask);
