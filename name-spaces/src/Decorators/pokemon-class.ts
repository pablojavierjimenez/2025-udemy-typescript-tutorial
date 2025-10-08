/**
 * Hasta donde entendí, el decorador recibe a la misma clase como parámetro
 * y se puede modificar o extender su funcionalidad
 * en este caso, solo imprime la clase en consola
 * los decoradores se aplican en tiempo de declaración, no en tiempo de ejecución
 * es decir, cuando la clase es declarada, no cuando es instanciada
 * se pueden aplicar a clases, métodos, propiedades y parámetros
 * para habilitar los decoradores, hay que activar la opción "experimentalDecorators" en el tsconfig.json
 * también se pueden crear decoradores que reciban parámetros, pero en este caso
 * hay que crear una función que retorne el decorador
 * ejemplo:
 * function decoratorWithParams(param: string) {
 *   return function (constructor: Function) {
 *     console.log(param, constructor);
 *   }
 * }
 * @decoratorWithParams('Hello')
 * class MyClass {}
 * en este caso, el decorador recibirá el parámetro 'Hello' y la clase MyClass
 * los decoradores son una característica experimental de TypeScript y pueden cambiar en el futuro
 * se recomienda usarlos con precaución en proyectos de producción
 */
function printToConsole(constructor: Function) {
  console.log("Console decorator: ", constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
  if (print) {
    return printToConsole;
  } else {
    return () => console.log("Hola Decoración");
  }
};

const blockPrototype = (constructor: Function) => {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

/**
 * FACTORY: Decorator
 */
function CheckValidPokemonId() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error("El id del pokemon debe estar entre 1 y 800");
      } else {
        console.log("El id del pokemon es válido");
        return originalMethod(id);
      }
    };
  };
}

function readOnly(isWritable: boolean = true): Function {
  return function (target: any, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      get() {
        return 'Pepe';
      },
      set(this, val) {
        // console.log(this, val);
        Object.defineProperty(this, propertyKey, {
          value: val,
          writable: !isWritable,
          enumerable: false,
        });
      },
    };
    return descriptor;
  };
}

// Decorador que imprime la clase en consola
@printToConsoleConditional( false )
// Decorador que bloquea la modificación de la clase y su prototipo
// @blockPrototype
export class Pokemon {

  @readOnly(true)
  private publicApi: string = "https://pokeapi.co";

  constructor(public name: string) {}

  @CheckValidPokemonId()
  savePokemonToDB(id: number) {
    console.log(`Guardando en base de datos`);
  }
}
