console.log("\n====== NEVER ======");
(() => {
  let mens = "feliz!!";

  const error = (val: number, msg: string): (number | never) => {
    if (val < 100) {
        throw new Error(msg);
    }

    return val;
  };

  let a: number = error(12 , "ERROR!! 😱");
  console.log(a);

  //   console.log();
})();

console.log("====== FIN NEVER ======");
