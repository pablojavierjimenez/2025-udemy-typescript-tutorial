(() => {
  console.log("======== ARGS-DEFAULT =======");

  const fullName = (
    firstName: string,
    lastName?: string | null,
    upper: boolean = false
  ): string => {
    const completeName = upper
      ? `${firstName} ${lastName || ""}`.toUpperCase()
      : `${firstName} ${lastName || ""}`;

    return `${completeName}${lastName ? "" : "(no last name)"}`;
  };

  const secretName = fullName("Tony", null, true);

  console.log({ secretName });

  console.log("======== FIN ARGS-DEFAULT =======");
})();
