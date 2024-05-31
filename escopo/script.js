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
dia = 'teste';

const data = {
  ano: 2018,
  mes: 'Janeiro',
}