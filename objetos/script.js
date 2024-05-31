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
