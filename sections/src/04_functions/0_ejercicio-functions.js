"use strict";
function sumar(a, b) {
    return a + b;
}
var contar = function (heroes) {
    return heroes.length;
};
var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
var llamarBatman = function (llamar) {
    if (llamar) {
        console.log("señal activada");
    }
};
llamarBatman();
var unirHeroes = function () {
    var personas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        personas[_i] = arguments[_i];
    }
    return personas.join(", ");
};
var noHaceNada = function (numero, texto, booleano, arreglo) { };
var noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
//# sourceMappingURL=0_ejercicio-functions.js.map