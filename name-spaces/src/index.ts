import { Pokemon } from "./Decorators/pokemon-class";
import {
  getPokemon,
  getPokemonMulti,
  getPokemonPromiseExample,
} from "./generics/get-pokemon";

// getPokemonPromiseExample()
//   .then((res) => console.log(res))
//   .catch((err) => console.log("Error en la llamada"))
//   .finally(() => console.log("Finally"));

// getPokemon(1)
//   .then((res) => console.log(res.sprites.front_default))
//   .catch((err) => console.log("Error en la llamada"))
//   .finally(() => console.log("Finally"));


const charander = new Pokemon("Charmander");
// console.log(charander); 

(Pokemon.prototype as any).customProperty = "Hola Mundo";
// console.log((charander as any).customProperty);

const pikachu = new Pokemon('Pikachu');

console.log(pikachu);