// ESCOPO DE FUNCAO

var variavelExterna = 'bla'


function mostrarCarro(){
    var carro = 'Astra'
    console.log(carro,variavelExterna)
/*Uma function consegue pegar uma variavel externa,
mas uma var criada dentro de uma function nao pode
ser usada fora dela*/
}

mostrarCarro() // Astra no console

console.log(carro) // erro...carro is not defined

/* Variáveis declaradas no escopo pai da função
conseguem ser acessadas pelas funcoes*/

// ESCOPO DE BLOCO

//neste caso conseguimos usar a var fora do bloco
if(true){
    var carro = 'ASTRA';
    console.log(carro)
}
console.log(carro) // ASTRA


//onde usar CONST e LET
//para implementar escopo de bloco (a partir do ES6) usamos

if(true){
    let carro = 'ASTRA';
    console.log(carro)
}
console.log(carro) // Erro

/* um let sempre fica no mesmo nível, não avança e nem retrocede, por ex:
se criarmos uma let do lado de fora e tentarmos usar ela dentro de um bloco
irá dar erro*/

let carro = 'ASTRA';
if(true){
    console.log(carro)//Erro
}


