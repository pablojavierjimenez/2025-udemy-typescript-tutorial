"use strict";
console.log("\n====== ENUMS ======");
(function () {
  enum AudioLevel {
    min = 1,
    medium,
    max = 10,
  }

  let currentAudio = AudioLevel.medium;
  let maxAudio = AudioLevel[2];

  console.log(currentAudio, maxAudio);
  console.log(AudioLevel);
})();
console.log("====== FIN ENUMS ======");
