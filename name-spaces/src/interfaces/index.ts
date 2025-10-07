
/**
 * Re-exporting interfaces
 * This index file re-exports all interfaces from the interfaces directory.
 */

// NOTE: por como tengo configurado el ts config con "isolatedModules": true
// el export directo me generaba este mensaje de error:
//    TS1205: Cannot re-export a type when the '--isolatedModules' flag is provided.
// Solución: usar 'export type { ... } from ...' en lugar de 'export { ... } from ...'

// export { Villain } from './Villains.interface';
// export { Hero } from './Hero.interface';

export type { Villain } from './Villains.interface';
export type { Hero } from './Hero.interface';
