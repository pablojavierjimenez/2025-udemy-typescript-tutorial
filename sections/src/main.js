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
(function () {
    var batman = "Bruce";
    var superman = "Clark";
    var existe = false;
    var parejaHeroes = [batman, superman];
    var villano = ["Lex Lutor", 5, true];
    var aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    var Power;
    (function (Power) {
        Power[Power["flash"] = 5] = "flash";
        Power[Power["superman"] = 100] = "superman";
        Power[Power["batman"] = 1] = "batman";
        Power[Power["acuaman"] = 0] = "acuaman";
    })(Power || (Power = {}));
    var fuerzaFlash = Power.flash;
    var fuerzaSuperman = Power.superman;
    var fuerzaBatman = Power.batman;
    var fuerzaAcuaman = Power.acuaman;
    function activarBatSignal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    var poder = "100";
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
console.log("\n====== ANY ======");
(function () {
    var marvel = 123;
    var otraAny = {};
    var power;
    marvel = "nocturno";
    console.log(marvel.charAt(4));
    marvel = 150.123456;
    console.log(marvel.toFixed(2));
    console.log({ otraAny: otraAny, power: power });
})();
console.log("====== FIN ANY ======");
console.log("\n====== ARRAYS ======");
(function () {
    var numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var villainsArr = ['duende verde', 'king ping', 'omega rojo'];
    villainsArr.forEach(function (v) { return console.log(v.toUpperCase()); });
    numbersArr.push(10);
    console.log(numbersArr);
})();
console.log("====== FIN ARRAYS ======");
(function () {
    var isSuperman = true;
    var isBatman = false;
    isSuperman = (isBatman) ? true : false;
    console.log('es superman: ', isSuperman);
    console.log('========FIN Boolean========');
})();
console.log("\n====== ENUMS ======");
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.medium;
    var maxAudio = AudioLevel[2];
    console.log(currentAudio, maxAudio);
    console.log(AudioLevel);
})();
console.log("====== FIN ENUMS ======");
console.log("\n====== NEVER ======");
(function () {
    var mens = "feliz!!";
    var error = function (val, msg) {
        if (val < 100) {
            throw new Error(msg);
        }
        return val;
    };
    var a = error(12, "ERROR!! 😱");
    console.log(a);
})();
console.log("====== FIN NEVER ======");
console.log("\n====== NULL-UNDEFINED ======");
(function () {
    var nada = null;
    var isActive = undefined;
    console.log(isActive);
    console.log('y siempre recuerda que null !== undefined', (nada !== isActive));
})();
console.log("====== FIN NULL-UNDEFINED ======");
console.log("====== NUMBERS ======");
(function () {
    var avengers = 15;
    console.log(avengers);
    var villains = 20;
    console.log(villains);
    if (villains > avengers) {
        console.log("estamos en problemas");
    }
    else {
        console.log("podemos ganar");
    }
    avengers = Number('55A');
    console.log({ avengers: avengers, villains: villains });
})();
console.log("====== FIN Numbers ======");
console.log("\n====== STRINGS ======");
(function () {
    var _a;
    var batman = "Batman";
    var linternaVerde = "Linterna verde ";
    var volcanNegro = "Volc\u00E1n Cumbia";
    console.log("I'm ".concat(linternaVerde));
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No existe la posición');
    console.log({ batman: batman, linternaVerde: linternaVerde, volcanNegro: volcanNegro });
})();
console.log("====== FIN STRINGS ======");
console.log("\n====== TUPLES ======");
(function () {
    var hero = ['coloso', 100, true];
    console.log(hero);
    hero[0] = 'Iron Man';
    hero[1] = 400;
    hero[2] = false;
    console.log(hero);
})();
console.log("====== FIN TUPLES ======");
console.log("\n====== VOID ======");
(function () {
    function callBatman() {
        return;
    }
    var callSuperman = function () {
        return;
    };
    var a = callBatman();
    var b = callSuperman();
    console.log(a, b);
})();
console.log("====== FIN VOID ======");
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
(function () {
    console.log("======== ARGS-DEFAULT =======");
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        var completeName = upper
            ? "".concat(firstName, " ").concat(lastName || "").toUpperCase()
            : "".concat(firstName, " ").concat(lastName || "");
        return "".concat(completeName).concat(lastName ? "" : "(no last name)");
    };
    var secretName = fullName("Tony", null, true);
    console.log({ secretName: secretName });
    console.log("======== FIN ARGS-DEFAULT =======");
})();
(function () {
    console.log("======== ARGS-OPTIONALS =======");
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || '(no last name)');
    };
    var secretName = fullName('Tony');
    console.log({ secretName: secretName });
    console.log("======== FIN ARGS-OPTIONALS =======");
})();
(function () {
    console.log("======== ARGS-REQUIRED =======");
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " - ").concat(lastName);
    };
    var secretName = fullName('Tony', 'Stark');
    console.log({ secretName: secretName });
    console.log("======== FIN ARGS-REQUIRED =======");
})();
(function () {
    console.log("======== ARGS-REST =======");
    var fullName = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return "".concat(firstName, " ").concat(restArgs.join(' '));
    };
    var secretName = fullName('Jose', 'Maria', 'Roberto', 'de Salamanca', 'Robledo');
    console.log({ secretName: secretName });
    console.log("======== FIN ARGS-REST =======");
})();
(function () {
    console.log("======== FUNCTIONS-TYPES =======");
    var addNumber = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var saveTheWorld = function () { return 'salvar al mundo'; };
    var myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
    console.log("======== FIN FUNCTIONS-TYPES =======");
})();
(function () {
    console.log("======== FUNCTIONS =======");
    var hero = "flash";
    function returnName() {
        return hero;
    }
    var activeBatSignal = function () {
        return true;
    };
    console.log(typeof activeBatSignal);
    console.log("======== FIN FUNCTIONS =======");
})();
(function () {
    console.log("======== CUSTOM OBJECT TYPES =======");
    var flash = {
        name: "Barry Allen",
        age: 24,
        powers: [1, 2],
    };
    var superman = {
        name: "superman",
        age: 60,
        powers: [1],
        getName: function () {
            return this.name;
        },
    };
    console.log(flash);
})();
(function () {
    console.log("======== UNION TYPES =======");
    var myCustomVariable = "Flash";
    console.log(typeof myCustomVariable);
    myCustomVariable = 452;
    console.log(typeof myCustomVariable);
    myCustomVariable = { name: "capitán", age: 78, powers: [3] };
    console.log(typeof myCustomVariable);
})();
//# sourceMappingURL=main.js.map