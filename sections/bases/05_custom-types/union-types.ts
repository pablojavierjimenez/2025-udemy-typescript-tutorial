(() => {
  console.log("======== UNION TYPES =======");
  type SuperHeroType = {
    age: Number;
    name: string;
    powers: Number[];
    getName?: () => string;
  };

  let myCustomVariable: string | number | SuperHeroType = "Flash";
  console.log(typeof myCustomVariable);
  
  myCustomVariable = 452;
  console.log(typeof myCustomVariable);
   
  myCustomVariable = { name: "capitán", age: 78, powers: [3] };
  console.log(typeof myCustomVariable);
})();
