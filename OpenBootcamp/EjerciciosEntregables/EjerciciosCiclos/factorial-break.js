/*
    Este archivo debe calcular el factorial de 10 utilizando un bucle while,
     una bifurcación if y una sentencia break
*/
let factorial = 10;
let resultado = 1;
while(factorial>0){
    if(factorial<1){
        break;
    }else{
        resultado *= factorial;
        console.log(resultado);
        factorial--;
    }
}
