
export const printObject = (obj: any): void => {
  console.log(obj);
};

export function genericFunction<T>(argument: T):T {
  return argument;
}

export function genericFunctionArrow<T>(argument: T): T {
  return argument;
}