# 2025-udemy-typescript-tutorial
2025 Udemy TypeScript Tutorial

## Develop
se creo la rama develop.

## Secciones:

### Sección 2:
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
