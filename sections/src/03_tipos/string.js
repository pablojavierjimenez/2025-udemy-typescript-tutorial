"use strict";
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
//# sourceMappingURL=string.js.map