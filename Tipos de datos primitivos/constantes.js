/*
  Si definimos valores primitivos no podremos cambiar ni agregar datos.
  A los valores compuestos si se les puede agregar datos o valores.
    *object
    *array
    *function
    *Class
  */
const PI = 3.1416;
console.log(PI);

//Creamos un arreglo
const arrayColors = ["blanco","negro","azul"];
//Imprimimos el arreglo
console.log(arrayColors);
//Agragamos valores a nuestro arreglo
arrayColors.push("rosado");
console.log(arrayColors);

//Creamos un objeto
const myObject = {
    nombre : "Federico",
    edad : 33
}
//Imprimimos el objeto
console.log(myObject);
//Agregamos un valor a nuestro
myObject.correo = "fede@gmail.com";
//Imprimimos el objeto
console.log(myObject);

