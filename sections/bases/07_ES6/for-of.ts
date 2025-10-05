(() => {

  type Avenger = {
    name: string
    weapon: string
  };

  const ironMan: Avenger = {
    name: 'Toni',
    weapon: 'tenedor'
  };
  const superMan: Avenger = {
    name: 'Clark',
    weapon: 'tenedor'
  };
  const batMan: Avenger = {
    name: 'Bruno',
    weapon: 'tenedor'
  };

  const avengers: Avenger[] = [ironMan, superMan, batMan];

  for (const hero of avengers) {
    console.log(hero);
  }

})()