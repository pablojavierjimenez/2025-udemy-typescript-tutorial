"use strict";
console.log("\n====== ENUMS ======");
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.medium;
    var maxAudio = AudioLevel[2];
    console.log(currentAudio, maxAudio);
    console.log(AudioLevel);
})();
console.log("====== FIN ENUMS ======");
//# sourceMappingURL=enums.js.map