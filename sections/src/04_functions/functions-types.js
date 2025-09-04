"use strict";
(function () {
    console.log("======== FUNCTIONS-TYPES =======");
    var addNumber = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var saveTheWorld = function () { return 'salvar al mundo'; };
    //* let myFunction: (x: number, y: number) => number;
    //? let myFunction: (x: string) => string;
    var myFunction;
    // myFunction = 10;
    // console.log({ myFunction });
    //* myFunction = addNumber
    //* console.log(myFunction(2,1));
    //? myFunction = greet
    //? console.log(myFunction('Juan'));
    myFunction = saveTheWorld;
    console.log(myFunction());
    console.log("======== FIN FUNCTIONS-TYPES =======");
})();
