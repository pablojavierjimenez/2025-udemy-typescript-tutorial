console.log("====== NUMBERS ======");
(() => {
  let avengers: number = 15;

  console.log(avengers);

  const villains = 20;

  console.log(villains);

  if (villains > avengers) {
    console.log("estamos en problemas");
  } else {
    console.log("podemos ganar");
  }

  /** 
   * cuidado con esto que NaN en javascript es considerado un numero
   * porque la function Number() siempre retorna un numero.
   */
  avengers = Number('55A')

  console.log({ avengers, villains });
})();

console.log("====== FIN Numbers ======");
