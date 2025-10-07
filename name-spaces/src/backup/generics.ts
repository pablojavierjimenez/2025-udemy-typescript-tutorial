import { Hero as HeroClass } from "../classes/Hero.class";
import * as ConstClasses from "../classes/const.class";
import { genericFunction, genericFunctionArrow, printObject } from "../generics/generics";
import { Hero, Villain } from "../interfaces";

// console.log('Hola Mundo!');
const circleDiameter = ConstClasses.PI * 2;
// console.log( { circleDiameter } );
// console.log('circle area', ConstClasses.calcCircleArea(10));


const Hero  = 1234;

const ironMan = new HeroClass('Iron Man', 400, 42);
// console.log(ironMan);

const spiderMan = new HeroClass( 'Spider Man ', 9, 16 );
// console.log( spiderMan );
// console.log(spiderMan.power);


console.log("// ------------------- Generics ------------------ //");

// printObject(1234);
// printObject(true);
// printObject('Hola Mundo');
// printObject({ a: 1, b: 2, c: 3 });
// printObject([1,2,3,4,5,6,7,8,9,10]);
// printObject(new Date());
// printObject( ironMan );

// console.log(genericFunction(1.234).toFixed(2));
// console.log(genericFunction('Hola mundo').toUpperCase());
// console.log(genericFunction(new Date()).getDate());

// console.log(genericFunctionArrow(1.234).toFixed(2));

export const deadPool = {
  name: 'Dead Pool',
  realName: 'Wade Winston Wilson',
  dangerLevel: 130,
}
console.log(genericFunctionArrow<Hero>(deadPool).realName);
console.log(genericFunctionArrow<Villain>(deadPool).dangerLevel);