(() => {
  console.log("======== CUSTOM OBJECT TYPES =======");

  type SuperHeroType = {
    age: Number;
    name: string;
    powers: Number[];
    getName?: () => string;
  };

  let flash: SuperHeroType = {
    name: "Barry Allen",
    age: 24,
    powers: [1, 2],
  };

  let superman: SuperHeroType = {
    name: "superman",
    age: 60,
    powers: [1],
    getName() {
      return this.name;
    },
  };

  console.log(flash);
})();
