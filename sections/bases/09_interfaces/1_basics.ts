(() => {
  console.log("// ------------- INTERFACES 1 BASICS ------------- //");

  // la única diferencia relevante entre type e interface 
  // es que las interfaces son extensibles y los types son fijos
  interface Hero {
    age: Number;
    name: string;
    powers: Number[];
    getName?: () => string;
  };
})();
