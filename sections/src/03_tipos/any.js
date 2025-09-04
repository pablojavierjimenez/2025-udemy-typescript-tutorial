"use strict";
console.log("\n====== ANY ======");
(function () {
    var marvel = 123;
    var otraAny = {};
    var power;
    marvel = "nocturno";
    // al usar el typador "as" o la declaracion "<number>variableName" en una variable nos aseguramos de que sera tratada como un string
    // esto (marvel as string) o esto  (<number>marvel) es exactamente lo mismo
    console.log(marvel.charAt(4));
    marvel = 150.123456;
    console.log(marvel.toFixed(2));
    console.log({ otraAny: otraAny, power: power });
})();
console.log("====== FIN ANY ======");
