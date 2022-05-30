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