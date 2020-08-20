// Verifique se a sua idade é maior do que a de algum parente
var idadeAntonio = 22;
var idadeLeo = 57;

if(idadeAntonio > idadeLeo){
  console.log('A maior idade é do Antonio')
} else {
  console.log('A maior idade é a do papai.')
}
// Dependendo do resultado coloque no console 'É maior', 'É igual
if(idadeAntonio >= idadeLeo){
  console.log('A maior idade é do Antonio')
} else {
  console.log('A maior idade é a do papai.')
}
// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);



// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //T
var idade = 28; //T
var possuiDoutorado = false; //F 
var empregoFuturo; // F
var dinheiroNaConta = 0; //F
// Compare o total de habitantes do Brasil com China (valor em mi
var brasil = 207;
var china = 1340;

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
 console.log('Verdadeiro');
} else {
 console.log('Falso');
}
//FALSO
// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
 console.log('Gato' && 'Cão');
} else {
 console.log('Falso');
}
//'GatoCão'