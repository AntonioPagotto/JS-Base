
/*/ Selecionando por ID
const animais = document.getElementById('animais');
//const animais = document.getElementById('animaisaasd'); //se selecionar algo que não existe, retorna null
// console.log(animais.innerText); //retorna apenas o texto

//Selecionando por Class ou Tag
const gridSection = document.getElementsByClassName('grid-section');

const gridSection = document.getElementsByClassName('grid-section');
//Neste segundo caso ele seleciona apenas quando as duas classes estiverem juntas

//Seleciona todas as UL's, retorna uma gtmlCollection


//Seletor geral, querySelector:


const animais = document.querySelector('.animais');
const contato = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child'); //li:last-child (pega o ultimo li);
const linkCSS = document.querySelector('[href^="https://"]');
//Neste caso ele seleciona todo href que inicia com https://


//Selecionando a primeira li do site:
const primeirali = document.querySelector('li');

/*/


const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

console.log(gridSectionHTML);
console.log(gridSectionNode);

primeiraUl = document.querySelector('ul'); //Primeira UL

primeiraUl.classList.add('grid-section'); //adicionou uma classe na primeira UL
console.log('Adicionei a classe');

console.log(gridSectionHTML);
console.log(gridSectionNode);


///// ARRAY LIKE:

// HTMLColection e NodeList são array-like, parecem uma array mas não são.
// o método de array forEach() existe apenas em NodeList

gridSectionNode.forEach(function (item, index) {
    console.log(item, index);
});

//transformar Array-like em array:

const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function (item) {
    console.log(item);
})