(() => {
  console.log("// ------------- INTERFACES 4 FUNCTIONS ------------- //");

  interface addTowNumbers {
    (a: number, b: number): number;
  };

  let addTwoNumbersFunction: addTowNumbers;

  addTwoNumbersFunction= (a: number, b:number ) => {
    return a+b;
  }
})();
