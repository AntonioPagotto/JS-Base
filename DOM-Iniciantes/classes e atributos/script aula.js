// classList

// Retorna uma lista com as classes do elemento. Permite adicionar
// remover e verificar se contém.
/*
menu.className; // string
menu.classList; // lista de classes
menu.classList.add('ativo'); //adiciona uma classe
menu.classList.add('ativo', 'mobile'); // adiciona dois ou mais...
menu.classList.remove('ativo'); //remove 
menu.classList.toggle('ativo'); // se existir remove a classe, se nao, adiciona....
menu.classList.contains('ativo'); // retorna true ou false // existe ou n
menu.classList.replace('ativo', 'inativo'); */


menu = document.querySelector('.menu');

console.log(menu.classList);

menu.classList.add('ativo');
menu.classList.add('azul');
menu.classList.remove('ativo');
menu.classList.toggle('ativo');

if (menu.classList.contains('azul')) {
    menu.classList.add('possui-azul');
} else {
    menu.classList.add('nao-possui-azul');
}

menu.className += 'vermelho'
console.log(menu.className);



///////////// attributes

const animais = document.querySelector('.animais');

console.log(animais.attributes); //retorna todos os atributos 

animais.attributes[0]; // retorna o primeiro atributo

console.log(animais.attributes['data-texto']); //retorna o atributo datatexto



/////////// getAttribute e setAttribute  

// É muito comum em métodos de get e set.

const img = document.querySelector('img');

img.getAttribute('src'); // valor do src
img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
img.setAttribute('novo-atributo', 'texto-dentro-atributo'); // muda o alt
img.hasAttribute('id'); // true / false
img.removeAttribute('alt'); // remove o alt

console.log(img.hasAttribute); // true / false se tem algum atributo

//ex:

const possuiAlt = img.hasAttribute('alt');
console.log(possuiAlt);



animais.className; //string com nome das classes
animais.className = 'azul'; // subistitui completamnete a string
animais.className = ' vermelo'; //adiciona vermelho a string

animais.attributes = 'class="ativo"'; //não funciona , read-only




///////////////////////// 

const carro = {
    portas: 4,
    andar: function (km) {
        console.log(`Andou ${km} km`)
    }
}