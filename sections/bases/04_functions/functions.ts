(() => {
  console.log("======== FUNCTIONS =======");

  const hero: string = "flash";

  function returnName(): string {
    return hero;
  }

  const activeBatSignal = (): boolean => {
    return true;
  }

  console.log(typeof activeBatSignal);


  console.log("======== FIN FUNCTIONS =======");
})();
