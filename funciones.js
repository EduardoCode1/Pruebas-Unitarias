// funciones.js

function esNumeroPar(numero) {
    return numero % 2 === 0;
}
module.exports.esNumeroPar = esNumeroPar;

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
module.exports.factorial = factorial;

function maxArray(arr) {
    return Math.max(...arr);
}
module.exports.maxArray = maxArray;

function esPalindromo(str) {
    const cleanedStr = str.replace(/[\W_]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}
module.exports.esPalindromo = esPalindromo;

function sumaArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}
module.exports.sumaArray = sumaArray;

function revertirCadena(str) {
    return str.split('').reverse().join('');
}
module.exports.revertirCadena = revertirCadena;

function filtrarPares(arr) {
    return arr.filter(num => num % 2 === 0);
}
module.exports.filtrarPares = filtrarPares;

function contarPalabras(str) {
    return str.split(' ').length;
}
module.exports.contarPalabras = contarPalabras;

function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
module.exports.celsiusAFahrenheit = celsiusAFahrenheit;
