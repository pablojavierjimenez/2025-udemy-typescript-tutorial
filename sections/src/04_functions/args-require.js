"use strict";
(function () {
    console.log("======== ARGS-REQUIRED =======");
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " - ").concat(lastName);
    };
    var secretName = fullName('Tony', 'Stark');
    console.log({ secretName: secretName });
    console.log("======== FIN ARGS-REQUIRED =======");
})();
