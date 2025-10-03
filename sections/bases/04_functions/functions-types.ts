(() => {
  console.log("======== FUNCTIONS-TYPES =======");

  const addNumber = (a: number, b: number): number => a + b;
  const greet = (name: string):string => `Hola ${name}`;
  const saveTheWorld = (): string => 'salvar al mundo'; 

  //* let myFunction: (x: number, y: number) => number;
  //? let myFunction: (x: string) => string;
  let myFunction: () => string;

  // myFunction = 10;
  // console.log({ myFunction });

  //* myFunction = addNumber
  //* console.log(myFunction(2,1));
  
  //? myFunction = greet
  //? console.log(myFunction('Juan'));
  
  myFunction = saveTheWorld
  console.log(myFunction());

  console.log("======== FIN FUNCTIONS-TYPES =======");
})();
