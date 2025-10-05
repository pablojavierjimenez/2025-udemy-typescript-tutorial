"use strict";
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
//# sourceMappingURL=0_ejercicio.js.map