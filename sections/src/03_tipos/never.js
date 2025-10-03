"use strict";
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
//# sourceMappingURL=never.js.map