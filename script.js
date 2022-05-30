// criando tarefas e adicionando em lista ordenada
const listaTarefas = document.querySelector('#lista-tarefas');

function addTarefa() {
    const textoTarefa = document.querySelector('#texto-tarefa');
    const li = document.createElement('li');
    li.className = 'tarefa';
    li.innerText = textoTarefa.value;
    listaTarefas.appendChild(li);
    textoTarefa.value = '';
}
document.querySelector('#criar-tarefa').addEventListener('click', addTarefa);

// colocar fundo cinza quando clicar
function addCor(evento) {
    const cor = evento.target;
    const lista = document.querySelector('li');
    cor.classList.add('selecionado');
    cor.style.backgroundColor = 'grey'
}
listaTarefas.addEventListener('click', addCor);