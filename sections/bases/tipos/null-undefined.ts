console.log("\n====== NULL-UNDEFINED ======");
(() => {


    // para poder hacer esto activar el null check 
    // en el tsconfig pero no se recomienda
  let nada = null;
  
  let isActive: (boolean | undefined) = undefined;

  console.log(isActive);

    console.log('y siempre recuerda que null !== undefined',(nada !== isActive));
})();

console.log("====== FIN NULL-UNDEFINED ======");
