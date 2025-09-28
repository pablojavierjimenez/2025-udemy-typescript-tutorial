(() => {
  // console.log(apodo);
  // console.log(apellido);
  // console.log(NOMBRE);

  var apodo = "pepe";

  let apellido = "Principe";
  const NOMBRE = "Juan B Justo";

  function getName() {
    console.log("vieja function");
  }

  // getName = () => {
  //   console.log("nueva function");
  // };

  const nweGetName = () => {
    console.log("FINAL function");
  };

  // forma correcta

  console.log(nweGetName());
})();
