(() => {
    console.log('// ------------- CLASES 1 ABSTRACTS ------------- //');

  abstract class Mutant {
    constructor(public name: string, public realName: string) {}
  }

  class XMen extends Mutant {
    public salvarMundo() {
      console.log("salvar al mundo!!");
    }
  }
  class Villain extends Mutant {
    public conquistarMundo() {
      console.log("conquistar al mundo!!");
    }
  }

  const printName = (character: Mutant): void => {
    console.log(character.realName);
  };

  const gato = new XMen("gato", "logan");
  const magneto = new Villain("Magneto", "Magnus");

  console.log(gato.salvarMundo());
  printName(gato);
  printName(magneto);
})();
