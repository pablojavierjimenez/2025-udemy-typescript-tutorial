"use strict";
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
