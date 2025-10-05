import { AlterEgoType } from "../types/Hero.types"

export interface Hero {
  heroName: string
  power: number
  alterEgo: AlterEgoType
}

export interface Power {
  id: number;
  description: string;
  powerLevel: number;
}