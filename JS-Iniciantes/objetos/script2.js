var pessoa = { 
  nome: 'Antonio',
  idade: 22,
  imc: function(peso,altura){
    return peso/altura;
  } 
}
console.log(pessoa.imc(85,1.55))

var quadrado = {
  lados: 4,
  area: function(lado){
    return lado*lado;
  },
  perimetro: function(lado){
    return this.lados * lado;
  }
}
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

//Podemos abreviar:
var quadrado = {
  lados: 4,
  area(lado){
    return lado*lado;
  },
  perimetro(lado){
    return this.lados * lado;
  },
  cinco(){
    return 5;
  }
}
quadrado.cinco();

//// OBJETO NATIVO DE JS: MATH

console.log(Math.random);

/////// DOT NOTATION
var heigth = 100;
var menu = {
  width: 800,
  heigth: 50,
  backgroundColor: '#c1c1c1c1',
  metadeHeight(){
    return this.heigth / 2;
  }
}
menu.backgroundColor = '#000000';
menu.color = 'blue';


menu.esconder = function(){
  console.log('Escondi')
}
var bg = menu.backgroundColor;

//PALAVRA CHAVE THIS
//FAZ REFERENCIA AO PROPRIO OBJT

var heigth = 100;
var menu = {
  width: 800,
  heigth: 50,
  backgroundColor: '#c1c1c1c1',
  metadeHeight(){
    return this.heigth / 2;
  }
}

// Um objeto sempre herda propriedades e metodos
// do objeto que foi utilizado para criar o mesmo

