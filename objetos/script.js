var pessoa = {
  nome: 'Filipe',
  idade: 31,
}

var quadrado = {
  lados: 4,
  area(lado) {
    return  lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
}

var menu = {
  width: 800,
  height: 40,
  backgroundColor: '#84E',
}

menu.color = 'blue';

menu.hasOwnProperty('width') // true
menu.hasOwnProperty('height') // false

// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
var eu = {
  nome: 'Filipe',
  sobrenome: 'Ribeiro',
  idade: 31,
}
// Crie um método no objeto anterior, que mostre o seu nome completo
eu.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`;
}
// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  verHomem() {
    console.log('Latiu');
  },
}
