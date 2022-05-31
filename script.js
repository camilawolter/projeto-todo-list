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
    const lista = document.getElementsByTagName('li');
    // seleciona somente um por vez
      for (let index = 0; index < lista.length; index += 1) {
        lista[index].style.backgroundColor = 'white';
        lista[index].classList.remove('selecionado');

    }
    cor.classList.add('selecionado');
    cor.style.backgroundColor = 'gray';
}
listaTarefas.addEventListener('click', addCor);

// clicar duas vezes risca o item - revome 
function removerCompleto(evento) {
    const completo = evento.target;
    if (completo.className.includes('completed')) {
      completo.remove();
    } else {
      completo.className = 'completed';
    }
}
  
listaTarefas.addEventListener('dblclick', removerCompleto);