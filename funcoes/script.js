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
})