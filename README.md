# 2025-udemy-typescript-tutorial
2025 Udemy TypeScript Tutorial

**Nota:**
```bash
# to run project first: 
:~$ cd section
# an then use
:~$ tsc -w
```

## Develop
se creo la rama develop.

## Secciones:

### Sección 2: 
_[GO to Section 2 Branch](https://github.com/pablojavierjimenez/2025-udemy-typescript-tutorial/tree/section/2_basics-types)_

Primeras configuraciones, tube que cambiar las config default de el `.tsconfig.json` porque me  agregaba export en los archivos como si fuesen módulos de node.

y poner en false los campos de source maps.
```json
{
    //...
    "module": "none",
kjsfhvlisdbfvjz
    // Other Outputs
    "sourceMap": false,
    "declaration": false,
    "declarationMap": false,
    //...
}
```
----
### Sección 3: Tipos de datos
_[GO to Section 3 Branch](https://github.com/pablojavierjimenez/2025-udemy-typescript-tutorial/tree/section/3_basics-types)_

En esta sección aprenderemos:

¿Qué son los tipos de datos?
Una introducción a los diferentes tipos de datos que existen en TypeScript.
- Booleanos.
- Números.
- Strings.
- Tipo Any.
- Arreglos.
- Tuplas.
- Enumeraciones
- Retorno void
- Null
- Undefined
Y al final un examen práctico y seguidamente un examen teórico.
 
----
### Sección 4: Funciones y objetos
_[GO to Section 4 Branch](https://github.com/pablojavierjimenez/2025-udemy-typescript-tutorial/tree/section/4_functions-and-objects)_


Esta sección esta enfocada en aprender como trabajan las funciones en TypeScript y también nos enfocaremos en aplicar buenas prácticas a la hora de crearlas.

Puntualmente tenemos:

- Declaraciones básicas de funciones
- Parámetros obligatorios
- Parámetros opcionales
- Parámetros por defecto
- Parámetros REST
- Tipo de datos "Function"

Al final de la sección, tendremos el examen práctico y el examen teórico.

-----

----
### Sección 5: Custom types and objects
_[GO to Section 5 Branch](https://github.com/pablojavierjimenez/2025-udemy-typescript-tutorial/tree/section/5_custom-types-and-objects)_

----
### Sección 6: Depuración y errores en el tsconfig.json
_[GO to Section 6 Branch]()_

- [Opciones del compilador de typescripts](https://www.typescriptlang.org/tsconfig/)

```json
{
  "compilerOptions": {
    // File Layout
    // "rootDir": "./src",
    "outDir": "./src",  // "outDir": "./dist",
    // outFile
    "outFile": "./src/main.js",
  },
  "exclude": ["ruta/carpeta/que-quiero-ignorar"],
  // cuidado con include que lo único que incluirá sera solo solo solo lo que este en include OJO!
  "include": ["ruta/carpeta/que-quiero-incluir"]
}
```
----
### Sección 7: Características de ES6 o JavaScript2015 disponibles a través TypeScript
_[GO to Section 7 Branch]()_

- [Opciones del compilador de typescripts](https://www.typescriptlang.org/tsconfig/)

----
### Sección 8: Características de ES6 o JavaScript2015 disponibles a través TypeScript
_[GO to Section 8 Branch](https://github.com/pablojavierjimenez/2025-udemy-typescript-tutorial/tree/section/8_typescript-classes)_

- [código de la sección en el github de Fernando herrera](https://github.com/Klerith/ts-bases/tree/fin-seccion-8)

----
### Sección 9: interfaces
_[GO to Section 9 Branch](https://github.com/pablojavierjimenez/2025-udemy-typescript-tutorial/tree/section/9_interfaces)_

- [Differences Between Type Aliases and Interfaces](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)
- [código de la sección 9 en el github de Fernando herrera](https://github.com/Klerith/ts-bases/tree/fin-seccion-8)

----

### Sección 10: interfaces
_[GO to Section 10 Branch](https://github.com/pablojavierjimenez/2025-udemy-typescript-tutorial/tree/section/10_name-spaces)_

- [Differences Between Type Aliases and Interfaces](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)

- [código de la sección 10 en el github de Fernando herrera](https://github.com/Klerith/curso-typescript/tree/fin-seccion-10)

- Commit message: 
  ```
  "feat(namespaces): implement TypeScript namespace pattern

  SCOPE: name-spaces folder implementation

  - Add basic namespace structure for Hero management
  - Implement Hero class with TypeScript namespaces
  - Configure webpack for namespace bundling
  - Add interfaces and types for Hero entity
  - Include example usage in index.ts
  - Setup proper module resolution in tsconfig.json

  This change implements TypeScript namespaces for better code organization and demonstrates proper namespace usage in a TypeScript project."
  ```

-----

### Sección 10: interfaces
_[GO to Section 10 Branch](https://github.com/pablojavierjimenez/2025-udemy-typescript-tutorial/tree/section/10_name-spaces)_

- [Differences Between Type Aliases and Interfaces](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)

- [código de la sección 10 en el github de Fernando herrera](https://github.com/Klerith/curso-typescript/tree/fin-seccion-10)

  ```
  feat(build):  Refactor project setup: migrate from Webpack to Parcel, update TypeScript configuration, and remove unnecessary files

  - Changed project name from "ts-dev" to "test-parcel" in package.json
  - Updated package.json to use Parcel for development and build scripts
  - Removed Webpack configuration file (webpack.config.js)
  - Updated TypeScript configuration (tsconfig.json) to align with Parcel requirements
  - Added new devDependencies for Parcel and updated TypeScript version
  - Created a new package-lock.json file
  ```

------------

### Sección 11: generics
_[GO to Section 11 Branch](https://github.com/pablojavierjimenez/2025-udemy-typescript-tutorial/tree/section/11_generics)_

- [Herramienta para generar tipos e interfaces en typescript](https://quicktype.io/), también tiene una extension para vs code.

- [código de la sección 11 en el github de Fernando herrera](https://github.com/Klerith/curso-typescript/tree/fin-seccion-11)

  ```
  feat: 🚀 feat(generics): add TypeScript generics examples and async/await with API integration
  - Implementa ejemplos de funciones genéricas y arrow functions genéricas en TypeScript
  - Agrega archivo de utilidades para imprimir objetos y funciones genéricas reutilizables 
  - Añade integración con la API de Pokémon usando axios y tipado estricto con interfaces generadas
  - Refactoriza el archivo principal para demostrar el uso de promesas y async/await con generics 
  - Crea y exporta nuevas interfaces para Pokémon y Villain, y centraliza los exports de interfaces
  - Ajusta tsconfig.json para compatibilidad con Parcel y tipado estricto
  ```
------------

### Sección 12: generics
_[GO to Section 12 Branch](https://github.com/pablojavierjimenez/2025-udemy-typescript-tutorial/tree/section/12_decorators)_

- [código de la sección 12 en el github de Fernando herrera](https://github.com/Klerith/curso-typescript/tree/fin-seccion-12)

```
feat(decorators): add TypeScript decorators examples and usage
- Implementa ejemplos de decoradores de clase, método y propiedad en TypeScript
- Explica el uso de decoradores y su sintaxis básica
- Añade casos prácticos de validación y logging usando decoradores
- Refactoriza archivos para demostrar la integración de decoradores en el proyecto
- Actualiza tsconfig.json para habilitar experimentalDecorators y emitDecoratorMetadata
```