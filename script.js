// *** FORMAS DE PERCORRER OS ELEMENTOS ***
// 1ª) Pegando elemento pai e o percorre pra encontrar seus filhos.
const lista = document.getElementById('lista');
const opcoesLista = lista.children;

Object.values(opcoesLista).forEach(opcao => {
    console.log(opcao);
})

console.log('');

// 2ª) Pega o primeiro elemento e o chama por função recursiva que
// percorre os próximos elementos com iteração
const primeiraOpcaoLista = document.querySelector('li');
let index = 0;

const apresentarOpcoes = elemento => {
    console.log(elemento);    
    index = (index + 1) % opcoesLista.length;
    if(index) {
        const proximo = elemento.nextElementSibling;
        apresentarOpcoes(proximo);
    }
}

apresentarOpcoes(primeiraOpcaoLista);

console.log('');
// 3ª) Se forem elementos iguais, pode pegar o conjunto desses elementos
// e percorrer os elementos de seu array.
const listaOpcoes = document.querySelectorAll('#lista li');

const mudarCor = evento => {
    Object.values(listaOpcoes).forEach(elemento => {
        elemento.classList.remove('mudar-cor-li');
    });
    const elemento = evento.target;
    elemento.classList.add('mudar-cor-li');
}

const segundaLista = document.getElementById('segundaLista').children;

Object.values(segundaLista).forEach((elemento, index) => {
    elemento.innerText =  opcoesLista[index].outerHTML;
});