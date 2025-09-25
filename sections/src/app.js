"use strict";
var batMovil = {
    carColor: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4,
};
var bumblebee = {
    carColor: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar: function () {
        console.log("Disparando");
    },
};
var villanos = [
    {
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false,
    },
    {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true,
    },
    {
        nombre: "James Logan",
        edad: undefined,
        mutante: true,
    },
];
var charles = {
    poder: "psíquico",
    estatura: 1.78,
};
var apocalipsis = {
    leader: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
};
var mystique;
mystique = charles;
mystique = apocalipsis;
console.log(apocalipsis);
//# sourceMappingURL=app.js.map