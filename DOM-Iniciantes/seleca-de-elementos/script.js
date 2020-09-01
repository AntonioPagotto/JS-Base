
// Selecionando por ID
const animais = document.getElementById('animais');
const animais = document.getElementById('animaisasdasd'); //se selecionar algo que não existe, retorna null
// console.log(animais.innerText); //retorna apenas o texto

//Selecionando por Class ou Tag
const gridSection = document.getElementsByClassName('grid-section');

const gridSection = document.getElementsByClassName('grid-section contato');
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

//
