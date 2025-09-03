console.log("\n====== ANY ======");
(() => {
  let marvel: any = 123;
  const otraAny:any = {};
  let power:any;

  marvel = "nocturno";

  // al usar el typador "as" o la declaracion "<number>variableName" en una variable nos aseguramos de que sera tratada como un string
  // esto (marvel as string) o esto  (<number>marvel) es exactamente lo mismo
  console.log((marvel as string).charAt(4));

  marvel = 150.123456;

  console.log((<number>marvel).toFixed(2));

  console.log({ otraAny, power });
})();

console.log("====== FIN ANY ======");
