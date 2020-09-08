//Exercicios

//Adicione a classe ativo em todos os itens do menu


const itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach((item) => {
    item.classList.add('ativo');
})

//Remover a classe ativo de todos os itens do menu e mantenha apenas o primeiro

itensMenu.forEach((item) => {
    item.classList.remove('ativo');
})
itensMenu[0].classList.remove('ativo')


//Verifique se as imagens possuem atributo alt

const imgs = document.querySelector('img');

imgs.forEach(() => {
    possuiAlt = imgs.classList.contains('alt');
    console.log(possuiAlt);
})


//Modifique o href do link externo no menu

const linkExterno = document.querySelector('a[href^="http"]');

linkExterno.replaceChild('href', 'www.novohref.com.br');

























