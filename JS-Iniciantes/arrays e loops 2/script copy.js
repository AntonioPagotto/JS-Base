var carros = ['Astra','Vectra','Civic','Versa','Corolla']


for(let i = 0; i < carros.length; i++){
    console.log(carros[i]);
}


// palavra chave break para o loop
// ex:

for(let i = 0; i < carros.length; i++){
    console.log(carros[i]);
    if(carros[i] === 'Civic')
    break;
}

//forEach
/* um metodo que executa uma funcao para
cada item da Array. */

//maneira mais simples de usarmos loop c array

carros.forEach(function(a){
    console.log(a)
})

// o "a" pode ser qualquer coisa....
//dinamicamente ele vira o item da array




//outro ex:

var frutas = ['Banana','Uva','Maça','Abacaxi']
//p facilitar use o nome no sing
frutas.forEach(function(fruta){
    console.log(fruta)
})
/* Mas poderia tranquilamente ser qqr coisa:
frutas.forEach(function(blabla){
    console.log(blabla)
}) */

//parametro index (id de cada item da array)
frutas.forEach(function(fruta, index){
    console.log(fruta, index)
})
