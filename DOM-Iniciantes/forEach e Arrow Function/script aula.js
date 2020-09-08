// forEach é um método de array

const imgs = document.querySelectorAll('img');



//a cada imgs ele roda essa função.......
//index é a posicao do item na array
imgs.forEach(function (item, index, array) {
    console.log(item, index, array);
});

///////////////////////////////////
// forEach e Array

//transformando em array

const titulos = document.getElementsByClassName('titulo');

//Agora titulosArray virou uma array de titulos
const titulosArray = Array.from(titulos);

titulosArray.forEach(function (item, index, array) {
    console.log(item, index, array)
});
////////////////////////////;
////// ARROW FUNCTION //////

// é uma função comum, abreviada:

imgs.forEach((item, index) => {
    console.log(item, index);
});
/// caso tenha só um parametro, nao precisa de parenteses:
imgs.forEach(item => {
    console.log(item);
});
/// é a mesma coisa que:
titulosArray.forEach(function (item) {
    console.log(item)
});
//caso não receba nenhum parametro, precisamos indicar os parenteses
let i = 0;
imgs.forEach(() => {
    console.log(i++);
});


//////////
let i = 0;
imgs.forEach((item) => {
    return console.log(i++)
});
// =
imgs.forEach((item) => console.log(i++));