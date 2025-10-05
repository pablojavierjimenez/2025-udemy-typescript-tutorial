(() => {
  console.log(
    "// ------------- INTERFACES 3 CLASSES and INTERFACES ------------- //"
  );

  type AddressType = {
    zip: number;
    id: string;
    city: string;
  };

  interface Mutant {
    name: string
    realName: string;
    address?: AddressType;
    mutantPower?(id: string): string;
  }

  interface IHuman {
    age: number;
  }
  interface IAlien {
    isAlien: boolean;
  }

  abstract class Hero implements Mutant {
    public name: string = '';
    public realName: string = '';
    public address?: AddressType;
  }

  class Xmen extends Hero implements IHuman {
    public name: string = '';
    public realName: string = '';
    public age: number = 20; 
  }

  class Villains extends Hero implements IAlien {
    public name: string = '';
    public realName: string = '';
    public address?: AddressType;
    public isAlien: boolean = false;
    public mutantPower(id: string): string {
      return 'esta function debe ser sobre escrita cuando se implemente en un objeto';
    }
  }

  // const abstractHero = new Hero();

  const gambit = new Xmen();
  gambit.name = 'Gambito';
  gambit.age = 34;
  
  const galaxia = new Villains();
  galaxia.isAlien = true;
  galaxia.name = 'Galactus';
  console.log(gambit, galaxia);

  
})();
