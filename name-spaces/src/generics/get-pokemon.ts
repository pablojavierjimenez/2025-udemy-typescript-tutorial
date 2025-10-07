import axios from 'axios';
import { Pokemon as PokemonApiData } from '../interfaces/Pokemon';


export const getPokemonPromiseExample = async (): Promise<number> => {
  console.log('Hola Pokemon');
  if (true) throw new Error('Error en la llamada');
  return 1;
}

export const getPokemon = async ( pokemonId: number ): Promise<PokemonApiData> => {
  const { data }= await axios.get(`https://pokeapi.co/api/v2/pokemon/${ pokemonId }`);

  return data;
};