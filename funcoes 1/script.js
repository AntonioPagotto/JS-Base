// Crie uma função para verificar se um valor é Truthy


// Crie uma função matemática que retorne o perímetro de um quadr
function perimetro(lado){
  return lado*4
}
// lembrando: perímetro é a soma dos quatro lados do quadrado
// Crie uma função que retorne o seu nome completo
function nomeCompleto(nome, sobrenome){
  return console.log(nome, " ", sobrenome)
}
// ela deve possuir os parâmetros: nome e sobrenome
// Crie uma função que verifica se um número é par
function ePar(num){
  if(num % 2 == 0){
    console.log('PAR')
  }else{
    console.log('IMPAR')
  }
}
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipodado(argumento){
  return typeof argumento
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callb
// utilize essa função para mostrar no console o seu nome complet
// quando o evento 'scroll' ocorrer.


addEventListener('scroll', console.log('Anonio'), true )

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`
 }
 function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises}`
 }
 precisoVisitar(20);
 jaVisitei(20);