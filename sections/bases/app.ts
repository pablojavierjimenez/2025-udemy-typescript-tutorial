// ------- Type declaration section -----

type HeroVehicleType = {
  carColor: string;
  modelo: string;
  antibalas: boolean;
  pasajeros: Number;
  disparar?: () => void;
};

type VillainType = {
    nombre: string
    edad: Number | undefined
    mutante: boolean
}

type CharlesType = {
  poder: string
  estatura: Number
};

type ApocalipsisType = {
  leader: boolean
  miembros: string[]
};

// ----- Code section -----
// Objetos
const batMovil = {
  carColor: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros: 4,
};

const bumblebee = {
  carColor: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros: 4,
  disparar() {
    // El método disparar es opcional
    console.log("Disparando");
  },
};

// Villanos debe de ser un arreglo de objetos personalizados
const villanos: VillainType[] = [
  {
    nombre: "Lex Luthor",
    edad: 54,
    mutante: false,
  },
  {
    nombre: "Erik Magnus Lehnsherr",
    edad: 49,
    mutante: true,
  },
  {
    nombre: "James Logan",
    edad: undefined,
    mutante: true,
  },
];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
const charles: CharlesType = {
  poder: "psíquico",
  estatura: 1.78,
};

const apocalipsis: ApocalipsisType = {
  leader: true,
  miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
};

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: ( CharlesType | ApocalipsisType );

mystique = charles;
mystique = apocalipsis;

console.log(apocalipsis);