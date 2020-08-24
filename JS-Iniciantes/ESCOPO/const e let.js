// A partir de agora só use LET e CONST

//CONST ..... Constante
//LET   ..... Variável



//var vaza o escopo.....nao use

{
    var carro = 'Fusca'
    const ano = 2018
}
console.log(carro); // Carro
console.log(ano); // erro ano is not defined

//////////////////////////////////////////////////////////////////////

//Erro em for loop:

for(var i = 0; i < 10; i++){
    console.log(`Número ${i}`)
}

console.log(i) //o i vazou pra cá e vem com 10 atribuido..... n queremos o i fora do loop

//então.... em um for sempre use let:
for(let a = 0; a < 10; a++){
    console.log(`Número ${a}`)
}

console.log(a) // erro....... o a ficou dentro do loop :)




//////////////////////////////////////
// CONST É UMA CONSTANTE.... NÃO PODEMOS REDECLARAR O VALOR DELE:
const mes = 'Maio'

/* ERROS */
const mes = 'Agosto' // erro..... tentei redeclarar o valor
mes = 'Junho' // erro..... tentei modificar o valor
const semana; // erro..... tentei declarar sem valor **************
////////////////////////////////////


//Podemos modificar as propriedades de um obj const.........
//neste caso nao da erro

const data = {  ///é um obj, nao um bloco.......
    dia: 26,
    mes: 'maio',
    ano: 1998,
}
data.dia = 29; // Funciona
data.hora = '12h20' //Posso add novas propriedades tbm.....
data = 'Janeiro' //da erro.......



//// Mais sobre let:
//mantem o escopo do bloco e impede a REdeclaracao da variavel, 
//mas permite a modificacao do valor da variavel


let ano; //criei sem declarar o valor.... PODE!
ano = 2020; //atribui o valor...... PODE!
ano++; //modifiquei o valor....... PODE!

console.log(ano) // 2021

let ano = 2020; // ERRO!!! - Redeclarei a let, NÃO PODE!
















