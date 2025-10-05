import { Hero as HeroInterface} from "../interfaces/Hero.interface";

export const heroesData: HeroInterface[] = [
  {
    heroName: 'Superman',
    power: 100,
    alterEgo: {
      realName: 'Clark Kent',
      age: 30,
      city: 'Metropolis'
    }
  },
  {
    heroName: 'Batman',
    power: 85,
    alterEgo: {
      realName: 'Bruce Wayne',
      age: 35,
      city: 'Gotham'
    }
  },
  { 
    heroName: 'Wolverine',
    power: 90,
    alterEgo: {
      realName: 'Logan',
      age: 200,
      city: 'New York'
    }
  }
]