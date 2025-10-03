"use strict";
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
//# sourceMappingURL=numbers.js.map