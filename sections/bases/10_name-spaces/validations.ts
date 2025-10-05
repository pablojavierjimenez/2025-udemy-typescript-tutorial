/*
  ¿Qué es un namespace en TypeScript?

  - Un namespace es una forma de organizar y agrupar código dentro de un mismo archivo o 
    a través de múltiples archivos.

  - Su objetivo principal es evitar colisiones de nombres (por ejemplo, dos clases o funciones 
    que se llamen igual en un mismo proyecto).

  - Los miembros de un namespace (clases, funciones, interfaces, constantes, etc.) 
    deben ser exportados explícitamente con `export` para poder ser usados fuera del namespace.

  - Para acceder a algo dentro de un namespace, usamos la notación de punto.
    Ejemplo: `MiEspacioDeNombres.MiClase`.

  - Hoy en día se recomienda usar **módulos de ES6 (import/export)** en lugar de namespaces,
    ya que los módulos tienen mejor soporte en proyectos grandes y modernos.
*/


// Ejemplo de uso de namespace en TypeScript:
namespace Geometry {
  export class Circulo {
    constructor(public radio: number) {}
    area() {
      return Math.PI * this.radio * this.radio;
    }
  }

  export class Square {
    constructor(public base: number, public altura: number) {}
    area() {
      return this.base * this.altura;
    }
  }
}

// Accediendo a las clases del namespace:
const c = new Geometry.Circulo(5);
const r = new Geometry.Square(10, 4);

console.log("Área del círculo:", c.area());
console.log("Área del rectángulo:", r.area());

/**
  * ¿O también se puede utilizar para encapsular funciones sueltas
*/
namespace Validations {
  export const validateText = (text: string): boolean => {
    return text.length >= 3;
  };

  export const validateDate = (myDate: Date): boolean => {
    return isNaN(myDate.valueOf()) ? true : false;
  };

}

console.log(Validations.validateText('Hola'));