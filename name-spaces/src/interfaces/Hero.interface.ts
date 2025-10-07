import { AlterEgoType } from "../types/Hero.types"

export interface Hero {
  name: string
  realName?: string
  power?: number
  alterEgo?: AlterEgoType
}

export interface Power {
  id: number;
  description: string;
  powerLevel: number;
}