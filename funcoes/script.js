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
