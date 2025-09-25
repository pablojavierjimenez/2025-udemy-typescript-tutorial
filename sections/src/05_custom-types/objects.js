"use strict";
(function () {
    console.log("======== CUSTOM OBJECT TYPES =======");
    var flash = {
        name: "Barry Allen",
        age: 24,
        powers: [1, 2],
    };
    var superman = {
        name: "superman",
        age: 60,
        powers: [1],
        getName: function () {
            return this.name;
        },
    };
    console.log(flash);
})();
