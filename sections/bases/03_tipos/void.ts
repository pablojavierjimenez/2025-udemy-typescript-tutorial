console.log("\n====== VOID ======");
(() => {

    function callBatman ():void {
        return;
    }
    let callSuperman = (): void => {
        return;
    }
    let a = callBatman();
    let b = callSuperman();
  console.log( a, b );
})();

console.log("====== FIN VOID ======");