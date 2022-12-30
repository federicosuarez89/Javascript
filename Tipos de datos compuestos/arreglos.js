/*
    Los arreglos son colecciones de elementos de diferentes tipos.
    Se pueden declarar como const o como let, eso queda según el 
    criterio del programador.
*/

//Definimos los arreglos
const a = [];
const b = [1,true,"hola",["a","b","c"]];
let c = Array.of("x","y","z",9,8,7);
let d = Array(7).fill("Fede");
const e = new Array(1,2,3,"Federico",true); //Insanciamos el Array
let f = ["rojo","azul"];

//Imprimimos por consola los arreglos
console.log(a);
console.log(b); 
console.log(c);
console.log(d);
console.log(e);
console.log(f);

//Imprimimos solo un elemento del arreglo
console.log(b[2]);
//Ahora imprimimos un elemento del arreglo interno
console.log(b[3][2]);

//Averiguamos la longitud del arreglo
console.log(b.length);
//Agregamos nuevos elementos al final del arreglo
f.push("amarillo")
console.log(f);
//Eliminamos el ultimo elemento del arreglo
f.pop();
console.log(f);