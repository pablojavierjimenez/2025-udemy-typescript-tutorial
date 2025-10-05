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
