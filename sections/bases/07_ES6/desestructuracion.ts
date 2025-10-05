(() => {
  type AvengerType = {
    nick: string;
    ironMan: string;
    vision: string;
    activo: boolean;
    power: number;
  };

  const avenger = {
    nick: "Samuel",
    ironMan: "Robert",
    vision: "Paul",
    activo: true,
    power: 1500.234567,
  };

  const { power, vision } = avenger;
  console.log(power.toFixed(2), vision.toUpperCase());
  const printAvenger = ({ironMan, ...rest}: AvengerType): void => {
    console.log(ironMan, rest);
  };


  const avengerArr: [string, boolean, number] = ['iron man', true, 156];

  const [ , ironMan, ] = avengerArr;
})();
