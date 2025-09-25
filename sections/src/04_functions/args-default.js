"use strict";
(function () {
    console.log("======== ARGS-DEFAULT =======");
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        var completeName = upper
            ? "".concat(firstName, " ").concat(lastName || "").toUpperCase()
            : "".concat(firstName, " ").concat(lastName || "");
        return "".concat(completeName).concat(lastName ? "" : "(no last name)");
    };
    var secretName = fullName("Tony", null, true);
    console.log({ secretName: secretName });
    console.log("======== FIN ARGS-DEFAULT =======");
})();
//# sourceMappingURL=args-default.js.map