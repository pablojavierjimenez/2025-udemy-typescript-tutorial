console.log("\n====== ARRAYS ======");
(() => {
    // esto es valido pero no es recomendable
    // const numbersArr: (number | string | boolean)[] =  [1,2,3,4,5,'6',7,8,9];
    const numbersArr: number[] =  [1,2,3,4,5,6,7,8,9];

    const villainsArr = ['duende verde', 'king ping', 'omega rojo'];

    villainsArr.forEach(v => console.log(v.toUpperCase()));
    numbersArr.push(10);
  console.log(numbersArr);
})();

console.log("====== FIN ARRAYS ======");