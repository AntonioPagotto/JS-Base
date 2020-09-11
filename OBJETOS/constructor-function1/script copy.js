//constructor functions:

function Carro() {
    this.marca = 'Marca';
    this.preco = 0;
}

const honda = new Carro();
// criando um NOVO carro... não sobrescrevendo a funcao
honda.marca = 'Honda';
honda.preco = 45000;
const fiat = new Carro();
// criando um NOVO carro... não sobrescrevendo a funcao
fiat.marca = 'Fiat';
fiat.preco = 15000;

console.log(Carro);
console.log(honda); //n sobrescreveu

//////

function Moto() {
    this.modelo = 'model';
    this.price = 0;
}

const cg = new Moto();




/////// new Keyword ////////
// a palavra chave new é responsável por criar um novo objeto baseado na função que passarmos a frente dela

const vw = new Carro();

//1 cria um novo ob
vw = {};

//2define o prototipo
vw.prototype = Carro.prototype;

//3 aponta a variavel this para o objeto
this = vw;

//4 executa a funcao substituindo this pelo objeto
vw.marca = 'Marca';
vw.preco = 0;

////////////////////////////////////////////////////////////////////////////////////////////////////


//// podemos passar parametros para a funcao q serao utilizados no momento da criacao do obj

function Carro2(marca, preco) {
    this.marca = marca;
    this.preco = preco;
}
const honda = new Carro2('Honda', 4000);
const fiat = new Carro2('Fiat', 10000);

////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////                    THIS KEYWORD                         /////////////////////////
// o this faz referencia ao prorpio objeto construido com a constructor function


function Carro3(marca, precoInicial) {
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;
    this.marca = marca;
    this.preco = precoFinal;
    console.log(this);
}


const mazda = new Carro3('Mazda', 2000);

