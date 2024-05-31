var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];

videoGames[0] // Switch
videoGames[2] // Xbox

// videoGames.pop();
// videoGames.push('3DS');
// videoGames.length;

for (var numero = 0; numero <= 10; numero++) {
  console.log(numero);
}

var i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}

for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if (videoGames[i] === 'PS4')  {
    break;
  }
}

var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
frutas.forEach(function(fruta, index, array) {
  console.log(fruta, index, array);
});

var numero = 0;
var maximo = 5;
for(;numero < maximo;) {
  console.log(numero);
  numero++;
}

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var anos = [1959, 1962, 1970, 1994, 2002];
// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
anos.forEach(function(ano) {
  console.log(`O brasil ganhou a copa de ${ano}`);
})
// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia']
for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] === 'Pera')  {
    break;
  }
}
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultima = frutas[frutas.length - 1];
console.log(ultima);
