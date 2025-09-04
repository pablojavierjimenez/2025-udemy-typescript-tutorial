(() => {
  console.log("======== ARGS-OPTIONALS =======");


    const fullName = (firstName: string, lastName?: string):string => {
        return `${firstName} ${lastName || '(no last name)'}`;
    }

    const secretName = fullName('Tony');

    console.log({secretName});

  console.log("======== FIN ARGS-OPTIONALS =======");
})();