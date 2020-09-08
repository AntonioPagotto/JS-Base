// height e width

// são propriedades e metodos dos objetos Element e HTMLElement, a maioria delas são read only

const section = document.querySelector('.animais');

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll

//mesma coisa para width....... clientWidht .......


const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;

const animaisTop = listaAnimais.offsetTop; //distancia de listaAnimais até o topo da página
const animaisLeft = listaAnimais.offsetLeft; //distancia de listaAnimais até a esquerda da página

console.log(animaisTop);

const primeiroh2 = document.querySelector('h2');
const h2left = primeiroh2.offsetLeft; //

////////////////////

window.innerWidth; // width da janela
window.outerWidth; // soma dev tools tbm
window.innerHeight; // height da janela
window.outerHeight; // soma a barra de endereço

window.pageYOffset; // distancia total do scroll horizontal
window.pageXOffset; // distancia total do scroll vertical

if (window.innerWidth < 600) {
    console.log('Tela menor que 600px');
}


///////////////////////
// matchMedia();

//utilize um media-querie como no css para verificar a largura do browser

const small = window.matchMedia('(max-width: 600px)');

if (small.matches) {
    console.log('Usuário mobile');
} else {
    console.log('Usuário Desktop');
}

























