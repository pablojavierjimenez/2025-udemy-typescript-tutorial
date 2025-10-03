// Funciones Básicas
function sumar( a:number, b: number ){
  return a + b;
}

const contar = ( heroes: string[] ) => {
  return heroes.length;
}
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
const llamarBatman = ( llamar?:boolean ):void => {
  if( llamar ){
    console.log("señal activada");
  }
}

llamarBatman();

// Rest?
const unirHeroes = ( ...personas: string[] ): string => {
  return personas.join(", ");
}


// Tipo function
const noHaceNada = ( numero:number, texto:string, booleano:boolean, arreglo: any[] ): void => {}

// Crear el tipo de function que acepte la function "noHaceNada"
let noHaceNadaTampoco: ( n:number, t:string, b:boolean, a: any[] ) => void;
noHaceNadaTampoco = noHaceNada
