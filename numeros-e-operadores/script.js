var idade = 31;

console.log(idade);

var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

var soma = '100' + 50; // 10050
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;

// Crie duas expressões que retornem NaN
var teste = 'teste' / 2;
var teste2 = 'teste' - 5;
console.log(teste, teste2);
// Somar a string '200' com o número 50 e retornar 250
var soma = +'200' + 50;
console.log(soma);
// Incremente o número 5 e retorne o seu valor incrementado
var cinco = 5;
console.log(++cinco);
// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)
var pesoPorDois = +numero / 2 + unidade;
console.log(pesoPorDois);
