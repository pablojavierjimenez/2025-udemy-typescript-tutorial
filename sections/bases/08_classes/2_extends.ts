(()=>{

  console.log('// ------------- CLASES 2 EXTENDS ------------- //');

  class Hero {
    constructor(
      public name: string,
      public realName: string
    ){
      // console.log('Constructor de Hero llamado');
    }

    /**
     * La diferencia entre una clase PRIVATE y una PROTECTED
     * es que a la privada solo se puede acceder dentro de la clase en la cual se crea
     * y la protected puede accederse desde las clases que extiendan
     * desde la clase donde fueron creadas. 
     */
    protected getFullName(): string {
      return `${this.name} - ${this.realName}`
    }
    private getRealName(): string {
      return `${this.name} - ${this.realName}`
    }
  }

  class Avenger extends Hero {
    constructor(
      public name: string,
      public realName: string,
      public isMutant: boolean
    ){
      // el método super() apunta al constructor de la clase de la cual hereda
      super( name, realName)
      // console.log('Constructor de Avenger llamado');
    }

    public getXMenFullName(): void {
      console.log(super.getFullName());
    }

    /**
     * Por eso desde esta clase que extiende de la clase Hero
     * NO PUEDO ejecutar el método getRealName()
     */
    public getXMenRealName(): void {
      // console.log(super.getRealName());
    }

    // GETTERS Y SETTERS
    // https://www.udemy.com/course/typescript-guia-completa/learn/lecture/6155288#overview

    
    /**
     *! NOTA: los getter siempre tienen que retornar algo
     *!       y los setter nunca retornan nada 
     *!       ( a menos que se les ponga explícitamente para algún manejo de error o etc)
     */
    get fullName () {
      return `Avenger Class Getter fullName - ${this.name} - ${this.realName}`
    }

    set fullName (name: string) {
      if ( name.length < 3) {
        throw new Error(' debe tener mínimo 3 caracteres')
      }
      this.realName = name;
    }
  }


  // ---------------- INSTANCIAS ------

  const storm = new Avenger('Iron Man', 'Tony', false);
  console.log(storm);

  storm.fullName = 'Rolo';
  console.log(storm.fullName);

  
  storm.getXMenFullName()

})()