(() => {
  console.log("// ------------- INTERFACES 2 BASICS ------------- //");

  interface Client {
    name: string
    age?: Number
    address?: Address
    getFullAddress(id: string): void 
  };

  interface Address {
      zip: number
      id: string
      city: string
    } 

  const cliente: Client = {
    age: 10,
    name: 'Juan',
    address: {
      zip: 12345,
      id: 'MDQ',
      city: "Monaco"
    },
    getFullAddress(id: string) {
      console.log(id, this.address?.city);
    },
  }





})();