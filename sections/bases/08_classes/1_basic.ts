(() => {
    console.log('// ------------- CLASES 1 BASICS ------------- //');

  class Avenger {
    static age: number = 35;
    static getAvgAge () {
      return this.age;
    }

    constructor(
      private realName: string,
      public name: string,
      public team?: string,
      public avgAge: number = 35,
    ) {
      Avenger.age = avgAge;
    }

    public bio() {
      return `${this.name} - (${this.team})`;
    }
  }

  const antMan: Avenger = new Avenger("ant man", "Paul", "avenger", 50);

  /**
   * aca podemos ver el problema de tener una Propiedad STATIC, que al cambiar en la clase
   * en cada invocación de la clase para crear un objeto se resetea el valor para todas las instancias
   * se me ocurre que podría ser util en un ejemplo distinto, por ejemplo podría tener una clase Country()
   * que defina un impuesto global, pero al utilizar subclases puedan heredar este valor o sobre escribirlo
   * por ejemplo clase Province() y clase City().
   * aunque ahora que lo pienso en este ejemplo 
   * al llegar a intentar instanciar distintas ciudades llegaríamos al mismo problema.
   * o en otro caso tener un método estático que acceda a una propiedad estática ej: Math.pi()
   */
  const ironMan: Avenger = new Avenger("Iron man", "Tony", "avenger", 46);

  // console.log(antMan.bio(), Avenger.getAvgAge());
  // console.log(ironMan.bio(), Avenger.getAvgAge());
})();
