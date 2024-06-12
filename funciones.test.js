// funciones.test.js

const { esNumeroPar } = require('./funciones');
const { factorial } = require('./funciones');
const { maxArray } = require('./funciones');
const { esPalindromo } = require('./funciones');
const { sumaArray } = require('./funciones');
const { revertirCadena } = require('./funciones');
const { filtrarPares } = require('./funciones');
const { contarPalabras } = require('./funciones');
const { celsiusAFahrenheit } = require('./funciones');

test('Verificación de un número par', () => {
    expect(esNumeroPar(4)).toBe(true);
    expect(esNumeroPar(7)).toBe(false);
});

test('Encontrar el factorial de un número', () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(0)).toBe(1);
});

test('Encontrar el número más alto en un Array', () => {
    expect(maxArray([1, 2, 3, 4, 5])).toBe(5);
    expect(maxArray([-1, -2, -3, -4, -5])).toBe(-1);
});

test('Verificar si una cadena es un palíndromo', () => {
    expect(esPalindromo('A man a plan a canal Panama')).toBe(true);
    expect(esPalindromo('hello')).toBe(false);
});

test('Suma de elementos de un Array', () => {
    expect(sumaArray([1, 2, 3, 4, 5])).toBe(15);
    expect(sumaArray([-1, -2, -3, -4, -5])).toBe(-15);
});

test('Revertir una cadena', () => {
    expect(revertirCadena('hello')).toBe('olleh');
    expect(revertirCadena('world')).toBe('dlrow');
});

test('Filtrar números pares de un Array', () => {
    expect(filtrarPares([1, 2, 3, 4, 5])).toEqual([2, 4]);
    expect(filtrarPares([11, 13, 15])).toEqual([]);
});

test('Contar las palabras de una cadena', () => {
    expect(contarPalabras('hello world')).toBe(2);
    expect(contarPalabras('Esto es una prueba unitaria')).toBe(5);
});

test('Conversión de temperatura', () => {
    expect(celsiusAFahrenheit(0)).toBe(32);
    expect(celsiusAFahrenheit(100)).toBe(212);
});


