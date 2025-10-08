import axios from 'axios';
import { Pokemon as PokemonApiData } from '../interfaces/Pokemon';

// Funcion generica avanzada:
// La forma correcta es vincular el tipo V al tipo de la propiedad key dentro de T:
export function getPokemonMulti<T, K extends keyof T>(obj: T, key: K, value: T[K]): T {
  obj[key] = value;
  return obj;
}


export const getPokemonPromiseExample = async (): Promise<number> => {
  console.log('Hola Pokemon');
  if (true) throw new Error('Error en la llamada');
  return 1;
}

export const getPokemon = async ( pokemonId: number ): Promise<PokemonApiData> => {
  const { data }= await axios.get(`https://pokeapi.co/api/v2/pokemon/${ pokemonId }`);

  return data;
};