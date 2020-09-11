//Exercicios

//transforme o objeto a baixo em uma constructor function:

const pessoa = {
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
        console.log(this.nome + ' andou');
    }
}

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = function () {
        console.log(this.nome + ' andou');
    }
}

//Crie 3 pesssoas:
//joao,20 anos
//maria 25 anos
//bruno 15 anos

const Joao = new Pessoa('João', 20);
const Maria = new Pessoa('Maria', 25);
const Bruno = new Pessoa('Bruno', 15);

//Crie uma constructor function para manipulação de
// listas de elementos do dom
// deve conter as seguintes propriedades e metodos:

//elements, retorna nodelist com os elementos selecionados
// addclass(classe), addiciona a classea a todos os elementos
// removeclass(classe), remove a classe a tdos os elementos


function Dom(seletor) {
    const elementList = document.querySelectorAll(seletor);
    this.elements = elementList;
    this.addClass = function (classe) {
        elementList.forEach((element) => {
            element.classList.add('classe');
        })
    }
    console.log(elementList);
}

const listaItens = new Dom('li');

listaItens.addClass('ativar');











