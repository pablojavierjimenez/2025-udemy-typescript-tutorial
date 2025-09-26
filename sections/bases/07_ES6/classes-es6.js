(()=>{
  class Avenger {
    name;
    power;
    constructor(name, power) {
      this.name = name || 'give me a name';
      this.power = power || 0;
    }
  }

  class XForce extends Avenger {
    isOmega = false;
    constructor(name, power, isOmega) {
      super(name, power);
      this.isOmega = isOmega || this.isOmega;
    }
  }

  const hulk = new Avenger();
  const peter = new XForce('Peter', 0);

  console.log(hulk, peter.isOmega );
})()