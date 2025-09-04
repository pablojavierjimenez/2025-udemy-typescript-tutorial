"use strict";
// Funciones Básicas
function sumar(a, b) {
    return a + b;
}
var contar = function (heroes) {
    return heroes.length;
};
var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
//Parametros por defecto
var llamarBatman = function (llamar) {
    if (llamar) {
        console.log("señal activada");
    }
};
llamarBatman();
// Rest?
var unirHeroes = function () {
    var personas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        personas[_i] = arguments[_i];
    }
    return personas.join(", ");
};
// Tipo function
var noHaceNada = function (numero, texto, booleano, arreglo) { };
// Crear el tipo de function que acepte la function "noHaceNada"
var noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
