//CRIE UMA ARRAY COM OS ANOS QUE O BR FOI CAMPEÃO DA COPA

var camp = [1959, 1962, 1970, 1994, 2002]

for(let i = 0; i < camp.length; i++){
    console.log('O Brasil ganhou a copa de', camp[i])
}


//Parar na fruta pera:

var fruit = ['Banana','Maça','Pera','Melancia']

for(let i = 0; i < fruit.length; i++){
    console.log(fruit[i])
    if(fruit[i] === 'Pera'){
        break;
    }
}

//Coloque a ultima fruta da array em cima
//de uma variavel sem remover a mesma
//da array

var ultimaFruit = fruit[fruit.length - 1]
