"use strict";
console.log("\n====== ARRAYS ======");
(function () {
    // esto es valido pero no es recomendable
    // const numbersArr: (number | string | boolean)[] =  [1,2,3,4,5,'6',7,8,9];
    var numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var villainsArr = ['duende verde', 'king ping', 'omega rojo'];
    villainsArr.forEach(function (v) { return console.log(v.toUpperCase()); });
    numbersArr.push(10);
    console.log(numbersArr);
})();
console.log("====== FIN ARRAYS ======");
