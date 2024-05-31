var carro = 'Fusca';
function mostrarCarro() {
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined

if (true) {
  let mes = 'Janeiro';
  console.log(mes);
}


{
  var carro = 'Fusca';
  const ano = 2018;
}
console.log(carro); // Carro
// console.log(ano); // erro ano is not defined

for(let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
// console.log(i); // i is not defined

const dia = 'Sexta';
// dia = 'teste';

const data = {
  ano: 2018,
  mes: 'Janeiro',
}

// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
  console.log(cor, marca, portas);
}

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
var numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
