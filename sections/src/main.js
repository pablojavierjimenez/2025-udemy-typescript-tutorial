"use strict";
(() => {
    console.log('// ------------- CLASES 1 BASICS ------------- //');
    class Avenger {
        static getAvgAge() {
            return this.age;
        }
        constructor(realName, name, team, avgAge = 35) {
            this.realName = realName;
            this.name = name;
            this.team = team;
            this.avgAge = avgAge;
            Avenger.age = avgAge;
        }
        bio() {
            return `${this.name} - (${this.team})`;
        }
    }
    Avenger.age = 35;
    const antMan = new Avenger("ant man", "Paul", "avenger", 50);
    const ironMan = new Avenger("Iron man", "Tony", "avenger", 46);
})();
(() => {
    console.log('// ------------- CLASES 2 EXTENDS ------------- //');
    class Hero {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name} - ${this.realName}`;
        }
        getRealName() {
            return `${this.name} - ${this.realName}`;
        }
    }
    class Avenger extends Hero {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.name = name;
            this.realName = realName;
            this.isMutant = isMutant;
        }
        getXMenFullName() {
            console.log(super.getFullName());
        }
        getXMenRealName() {
        }
        get fullName() {
            return `Avenger Class Getter fullName - ${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error(' debe tener mínimo 3 caracteres');
            }
            this.realName = name;
        }
    }
    const storm = new Avenger('Iron Man', 'Tony', false);
    console.log(storm);
    storm.fullName = 'Rolo';
    console.log(storm.fullName);
    storm.getXMenFullName();
})();
(() => {
    console.log('// ------------- CLASES 1 ABSTRACTS ------------- //');
    class Mutant {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class XMen extends Mutant {
        salvarMundo() {
            console.log("salvar al mundo!!");
        }
    }
    class Villain extends Mutant {
        conquistarMundo() {
            console.log("conquistar al mundo!!");
        }
    }
    const printName = (character) => {
        console.log(character.realName);
    };
    const gato = new XMen("gato", "logan");
    const magneto = new Villain("Magneto", "Magnus");
    console.log(gato.salvarMundo());
    printName(gato);
    printName(magneto);
})();
(() => {
    console.log("// ------------- CLASES 4 PRIVATE CLASSES ------------- //");
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy apocalipsis');
            }
            return Apocalipsis.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    apocalipsis2.changeName('segundo apoca');
    console.log(apocalipsis1, apocalipsis2, apocalipsis3);
})();
//# sourceMappingURL=main.js.map