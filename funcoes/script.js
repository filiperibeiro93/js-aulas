function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado(2);
console.log(areaQuadrado(2));

imc(80, 1.80); // imc aparece no console

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

imc(69, 1.6)

function corFavorita(cor) {
  if (cor === 'azul') {
    return 'Eu gosto do céu';
  } else if (cor === 'verde') {
    return 'Eu gosto de mato';
  } else {
    return 'Eu não gosto de cores';
  }
}

console.log(corFavorita('azul'));

addEventListener('click', function() {
  console.log('clicou');
});

function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Informe a sua idade!';
  } else if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade(60));

var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
console.log(dados())
// outrosDados(); // retorna um erro


// Crie uma função para verificar se um valor é Truthy
function verificarValor(valor) {
  console.log(!!valor);
  return !!valor;
}
verificarValor(20);
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado) {
  console.log(lado * 4);
  return lado * 4;
}
perimetro(4);
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  var completo = `${nome} ${sobrenome}`;
  console.log(completo);
  return completo;
}
nomeCompleto('Filipe', 'Ribeiro');
// Crie uma função que verifica se um número é par
function par(numero) {
  if (numero % 2 === 0) {
    console.log('É par');
    return true;
  } else {
    console.log('Não é par');
    return false;
  }
}
par(23);
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipo(valor) {
  console.log(typeof valor);
  return typeof valor;
}
tipo(true);
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('click', function() {
  console.log('Filipe Ribeiro');
});
// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
