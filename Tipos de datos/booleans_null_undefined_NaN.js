//Tipo de dato Boolean
let verdadero = true;
let falso = false;
console.log(typeof(falso));

//Tipo de dato null, undefined y NaN
/*
    Tanto null como undefined van a representar un valor ausente, es decir una 
    variable que no ha sido inicializada.
*/
//Undefined es un dato que Javascript asigna a la variable al ver que el programador
//la ha dejado sin inicializar
let indefinida;
console.log(indefinida);

//Null es un valor que intencionalmente asigna el programador
let nulo = null;
console.log(nulo);

//NaN (Not a Number) se asigna este valor cuando operamos y una de las variables 
//no es un numero
let noEsUnNumero = "hola" * 3.7;
console.log(noEsUnNumero);