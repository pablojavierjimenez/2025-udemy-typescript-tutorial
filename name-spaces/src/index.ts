import { getPokemon, getPokemonPromiseExample } from "./generics/get-pokemon";

getPokemonPromiseExample()
  .then((res) => console.log(res))
  .catch((err) => console.log("Error en la llamada"))
  .finally(() => console.log("Finally"));

getPokemon(1)
  .then((res) => console.log(res.sprites.front_default))
  .catch((err) => console.log("Error en la llamada"))
  .finally(() => console.log("Finally"));
