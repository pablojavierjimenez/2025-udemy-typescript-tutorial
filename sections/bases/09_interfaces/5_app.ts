// Crear interfaces

interface ICar {
  encender: boolean;
  velocidadMaxima: number;
  acelerar: () => void;
}

interface ICitizenQuantity {
  (citizen: string[]): number
}

// Cree una interfaz para validar el auto (el valor enviado por parámetro)
const conducirBatMovil = (auto: ICar): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
};

const batMovil: ICar = {
  encender: false,
  velocidadMaxima: 0,
  acelerar() {
    console.log("...... go go go!!!");
  },
};

// Cree una interfaz con que permita utilizar el siguiente objeto
interface IVillain {
  cantar: true;
  comer?: true;
  llorar?: false;
}

// utilizando propiedades opcionales

const joker: IVillain = {
  cantar: true,
  comer: true,
  llorar: false,
};

const cantar = (joker: IVillain): void => {
  if (joker.cantar) {
    console.log("JAJAJAJA");
  }
};

// Cree una interfaz para la siguiente function

const batCity: ICitizenQuantity = (ciudadanos: string[]): number => {
  return ciudadanos.length;
};

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y métodos

interface IPerson {
  nombre: string
  edad: number
  sexo: 'F'| 'M' | 'O'
  estadoCivil: string
  imprimirBio(): void // en consola una breve description.: string
}

/*
  propiedades:
  nombre: string
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve description.
*/
class Persona implements IPerson {
  public nombre: string = ''
  public edad: number = 0
  public sexo: ("F" | "M" | "O") = 'O';
  public estadoCivil: string = '';

  public imprimirBio(): void {
    console.log(`esta es la bio de : -> ${this.nombre}`);
  }
}

const juan = new Persona();
juan.nombre = 'Juan';
juan.sexo = 'M';

console.log(juan, juan.imprimirBio());
