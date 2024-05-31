var hasGraduation = false;
var hasPhd = true;

if (hasGraduation) {
  console.log('É verdadeiro');
} else if (hasPhd) {
  console.log('Possui Phd');
} else {
  console.log('Possui nada');
}

var x = 10;
console.log(x != 10);

var corFavorita = 'Vermelho';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Vermelho':
    console.log('Olhe para rosas.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break;
  default:
    console.log('Feche os olhos');
}
