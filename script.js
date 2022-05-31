// criando tarefas e adicionando em lista ordenada
const listaTarefas = document.querySelector('#lista-tarefas');
const criaTarefa = document.querySelector('#criar-tarefa');

function addTarefa() {
    const textoTarefa = document.querySelector('#texto-tarefa');
    const li = document.createElement('li');
    li.className = 'tarefa';
    li.innerText = textoTarefa.value;
    listaTarefas.appendChild(li);
    textoTarefa.value = '';
}
criaTarefa.addEventListener('click', addTarefa);

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

// limpar toda a lista
const apagaListaTudo = document.querySelector('#apaga-tudo');
function limparlista() {
    const tarefas = document.querySelectorAll('.tarefa');
    for (let index = 0; index < tarefas.length; index += 1) {
        tarefas[index].remove();
    }
}
apagaListaTudo.addEventListener('click', limparlista);

// remover elementos só os finalizados
const apagaCompletos = document.querySelector('#remover-finalizados');
function limparCompletos() {
    const tarefasCompletas = document.querySelectorAll('.completed');
    for (let index = 0; index < tarefasCompletas.length; index += 1) {
        tarefasCompletas[index].remove();
    }
}
apagaCompletos.addEventListener('click', limparCompletos);

// remover elementos selecionados
const apagaSelecionados = document.querySelector('#remover-selecionado');
function limparSelecionados() {
    const tarefasSelecionadas = document.querySelectorAll('.selecionado');
    for (let index = 0; index < tarefasSelecionadas.length; index += 1) {
        tarefasSelecionadas[index].remove();
    }
}
apagaSelecionados.addEventListener('click', limparSelecionados);