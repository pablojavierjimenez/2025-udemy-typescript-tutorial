"use strict";
(function () {
    console.log("======== ARGS-OPTIONALS =======");
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || '(no last name)');
    };
    var secretName = fullName('Tony');
    console.log({ secretName: secretName });
    console.log("======== FIN ARGS-OPTIONALS =======");
})();
//# sourceMappingURL=args-optionals.js.map