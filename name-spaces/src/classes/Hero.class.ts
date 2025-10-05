import { powers as PowerData,  } from '../data/powers.data';
import { Power } from '../interfaces/Hero.interface';

export class Hero {
  private powers: Power[] = PowerData;
  constructor(
    public name: string,
    public powerId: number,
    public age: number,
  ) {}

  get power(): string {
    return this.powers.find(power => power.id === this.powerId)?.description || 'Unknown power';
  }
}