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
var maximo = 50;
for(;numero < maximo;) {
  console.log(numero);
  numero++;
}
