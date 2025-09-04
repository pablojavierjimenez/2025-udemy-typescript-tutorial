"use strict";
(function () {
    console.log("======== ARGS-REST =======");
    var fullName = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return "".concat(firstName, " ").concat(restArgs.join(' '));
    };
    var secretName = fullName('Jose', 'Maria', 'Roberto', 'de Salamanca', 'Robledo');
    console.log({ secretName: secretName });
    console.log("======== FIN ARGS-REST =======");
})();
