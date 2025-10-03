(() => {
  console.log("======== ARGS-REST =======");


    const fullName = (firstName: string, ...restArgs: string[]) : string => {

    return `${firstName} ${restArgs.join(' ')}`;
  };

  const secretName = fullName('Jose', 'Maria', 'Roberto', 'de Salamanca', 'Robledo');

  console.log({ secretName });

  console.log("======== FIN ARGS-REST =======");
})();
