"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(function () {
    var avenger = {
        nick: "Samuel",
        ironMan: "Robert",
        vision: "Paul",
        activo: true,
        power: 1500.234567,
    };
    var power = avenger.power, vision = avenger.vision;
    console.log(power.toFixed(2), vision.toUpperCase());
    var printAvenger = function (_a) {
        var ironMan = _a.ironMan, rest = __rest(_a, ["ironMan"]);
        console.log(ironMan, rest);
    };
    var avengerArr = ['iron man', true, 156];
    var ironMan = avengerArr[1];
})();
(function () {
    var ironMan = {
        name: 'Toni',
        weapon: 'tenedor'
    };
    var superMan = {
        name: 'Clark',
        weapon: 'tenedor'
    };
    var batMan = {
        name: 'Bruno',
        weapon: 'tenedor'
    };
    var avengers = [ironMan, superMan, batMan];
    for (var _i = 0, avengers_1 = avengers; _i < avengers_1.length; _i++) {
        var hero = avengers_1[_i];
        console.log(hero);
    }
})();
(function () {
    var apodo = "pepe";
    var apellido = "Principe";
    var NOMBRE = "Juan B Justo";
    function getName() {
        console.log("vieja function");
    }
    var nweGetName = function () {
        console.log("FINAL function");
    };
    console.log(nweGetName());
})();
//# sourceMappingURL=main.js.map