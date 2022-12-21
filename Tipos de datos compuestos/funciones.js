/*
    Una funcion es un bloque de codigo que se define una sola vez
    y se puede reutilizar las veces que sea necesaria, puede recibir 
    parametros y puede retornar o no un valor. Las funciones en 
    Javascript son objetos.
    Funciones declaradas pueden ser invocadas en cualquier lugar de 
    nuestro programa, aun antes de ser declaradas porque Javascript 
    por el hoisting permite utilizar funciones o variables aun antes
    de ser declaradas.
    En cambio las funciones expresadas no permiten esto, solo se 
    pueden invocar luego de ser creadas.
*/

//Funciones declaradas
function myFunction(){
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}
//Una funcion que devuelve valor
function myFunction2(){
    let cadena = "Esta funcion devolvio una cadena"
    console.log(cadena);
    return cadena;
}
//Una funcion que recibe parametros
function sayHi(nombre, edad){
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`);
}

//Funciones anonimas(expresadas)
const funcionAnonima = function(){
    console.log("Esto es una funcion expresada");
}

//Invocamos la funcion
myFunction();
myFunction2();
sayHi("Federico",33);
funcionAnonima();