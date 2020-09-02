//Retorne no console todas as imagens do site:

const TodasImagens = document.querySelectorAll('img');
console.log(TodasImagens);

//Retorne no console apenas as imagens que começaram com a palavra imagem

const ApenasImagens = document.querySelectorAll('img[src^="img/imagem"]');
console.log(ApenasImagens);

//Selecione todos os links internos (onde o href começa com #)

const LinksInternos = document.querySelectorAll('[href^="#"]');
console.log(LinksInternos);

//Selecione o primeiro h2 dentro de .animais-descricao

const FirstH2Animais = document.querySelector('.animais-descricao h2');
console.log(FirstH2Animais);

//Selecione o último p do site

const paragrafos = document.querySelectorAll('p');

const ultimoParagrafo = Number(paragrafos.length - 1);
console.log(paragrafos[ultimoParagrafo]);

//melhor maneira de fazer:
// o -- remove 1
console.log(paragrafos[--paragrafos.length]);

