//Criar metodo que mostre nome copleto
var dados = {
  nome: 'Antonio',
  sobrenome: 'Pagotto',
  idade: 22,
  cidade: 'Itajubá',
}
dados.nomeCompleto = function(){
  return `${this.nome} ${this.sobrenome}`;
}

//Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Opel'
}
carro.preco = 3000;


//CRIE UM OBJ: Cachorro, labrador,preto, 10 anos
// que late ao ver um homem

var cachorro = {
  raca: 'Labrador',
  cor: 'Preto',
  idade: 10,
  late(pessoa){
    if(pessoa === 'homem'){
      console.log('Late');
    }
  }
}
