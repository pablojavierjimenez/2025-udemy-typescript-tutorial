"use strict";
console.log("\n====== NULL-UNDEFINED ======");
(function () {
    // para poder hacer esto activar el null check 
    // en el tsconfig pero no se recomienda
    var nada = null;
    var isActive = undefined;
    console.log(isActive);
    console.log('y siempre recuerda que null !== undefined', (nada !== isActive));
})();
console.log("====== FIN NULL-UNDEFINED ======");
