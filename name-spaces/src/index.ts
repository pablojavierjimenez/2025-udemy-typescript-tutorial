import { Hero as HeroClass } from "./classes/Hero.class";
import * as ConstClasses from "./classes/const.class";

console.log('Hola Mundo!');
const circleDiameter = ConstClasses.PI * 2;
console.log( { circleDiameter } );
console.log('circle area', ConstClasses.calcCircleArea(10));


const Hero  = 1234;

const ironMan = new HeroClass('Iron Man', 400, 42);
console.log(ironMan);

const spiderMan = new HeroClass( 'Spider Man ', 9, 16 );
console.log( spiderMan );
console.log(spiderMan.power);
