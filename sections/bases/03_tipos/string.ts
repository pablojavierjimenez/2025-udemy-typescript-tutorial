console.log("\n====== STRINGS ======");
(() => {
  const batman: string = "Batman";
  const linternaVerde: string = "Linterna verde ";
  const volcanNegro: string = `Volcán Cumbia`;

  console.log(`I'm ${linternaVerde}`);

  /**
   * utilizando el nullCheck ( ? ) para salvar errores en strings
   */
  console.log(batman.toUpperCase());
  
  console.log(batman[10]?.toUpperCase() || 'No existe la posición');

  console.log({ batman, linternaVerde, volcanNegro });
})();

console.log("====== FIN STRINGS ======");
