"use strict";
(() => {
    console.log("// ------------- INTERFACES 1 BASICS ------------- //");
    ;
})();
(() => {
    console.log("// ------------- INTERFACES 2 BASICS ------------- //");
    ;
    const cliente = {
        age: 10,
        name: 'Juan',
        address: {
            zip: 12345,
            id: 'MDQ',
            city: "Monaco"
        },
        getFullAddress(id) {
            var _a;
            console.log(id, (_a = this.address) === null || _a === void 0 ? void 0 : _a.city);
        },
    };
})();
(() => {
    console.log("// ------------- INTERFACES 3 CLASSES and INTERFACES ------------- //");
    class Hero {
        constructor() {
            this.name = '';
            this.realName = '';
        }
    }
    class Xmen extends Hero {
        constructor() {
            super(...arguments);
            this.name = '';
            this.realName = '';
            this.age = 20;
        }
    }
    class Villains extends Hero {
        constructor() {
            super(...arguments);
            this.name = '';
            this.realName = '';
            this.isAlien = false;
        }
        mutantPower(id) {
            return 'esta function debe ser sobre escrita cuando se implemente en un objeto';
        }
    }
    const gambit = new Xmen();
    gambit.name = 'Gambito';
    gambit.age = 34;
    const galaxia = new Villains();
    galaxia.isAlien = true;
    galaxia.name = 'Galactus';
    console.log(gambit, galaxia);
})();
(() => {
    console.log("// ------------- INTERFACES 4 FUNCTIONS ------------- //");
    ;
    let addTwoNumbersFunction;
    addTwoNumbersFunction = (a, b) => {
        return a + b;
    };
})();
const conducirBatMovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
};
const batMovil = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
        console.log("...... go go go!!!");
    },
};
const joker = {
    cantar: true,
    comer: true,
    llorar: false,
};
const cantar = (joker) => {
    if (joker.cantar) {
        console.log("JAJAJAJA");
    }
};
const batCity = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    constructor() {
        this.nombre = '';
        this.edad = 0;
        this.sexo = 'O';
        this.estadoCivil = '';
    }
    imprimirBio() {
        console.log(`esta es la bio de : -> ${this.nombre}`);
    }
}
const juan = new Persona();
juan.nombre = 'Juan';
juan.sexo = 'M';
console.log(juan, juan.imprimirBio());
//# sourceMappingURL=main.js.map