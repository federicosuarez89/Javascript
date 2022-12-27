/*
    La palabra break lo que hace es interrumpir el flujo de ejecucion del ciclo,
    el programa en cuanto llega a esta palabra rompe el ciclo y sale de ahi.
*/
for(let i=0;i<11;i++){
    if (i%2==0){
        console.log("Valor del iterador: "+i);
        break;
    }
}
console.log("Fin del ciclo for");