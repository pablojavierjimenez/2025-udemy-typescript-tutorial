(() => {
  console.log("======== ARGS-REQUIRED =======");
    const fullName = (firstName: string, lastName: string):string => {
        return `${firstName} - ${lastName}`;
    }

    const secretName = fullName('Tony', 'Stark');

    console.log({secretName});

  console.log("======== FIN ARGS-REQUIRED =======");
})();