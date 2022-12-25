 /*
    Un objeto es una coleccion de llave:valor 
 */

 //Creacion de objetos
 const b = {}
 console.log(b);
 //Creamos un nuevo objeto
 const persona = {
    nombre: "Federico",
    apellido: "Suarez",
    edad: "33",
    pasatiempos: ["correr","hacer ejercicio", "dar clases"],
    estadoCivil: "casado",
    contacto: {
        email: "federico.uni.89@gmail.com",
        tel: 2612552658,
        ciudad: "Mendoza",
        pais: "Argentina",
    },
    saludar: function(){
        console.log("Hola Mundo")
    },
    sayMyName: function(){
        console.log("Hello my name is: "+this.nombre);
    },
    sayMyLastName: function(){
        console.log(`Hello my last name is : ${this.apellido}`)
    }
 }

 //Imprimimos el objeto creado
 console.log(persona);
 //Podemos acceder a un valor especifico llamando a su llave
 console.log(persona["nombre"]);
 //La forma mas utilizada es con el punto para acceder a los atributos del objeto
 console.log(persona.apellido);
 console.log(persona.pasatiempos);
//Utilizamos los metodos creados dentro del objeto
 persona.saludar();
 persona.sayMyName();
 persona.sayMyLastName();

 //Metodo para imprimir las llaves del objeto
 /*
    Esto lo que hace es juntar las llaves dentro de un arreglo 
*/
 console.log(Object.keys(persona));

 //Metodo para imprimir los valores guardados dentro de las llaves
 console.log(Object.values(persona));

 //Metodo para averiguar si una llave esta dentro de mi objeto
 console.log(persona.hasOwnProperty("nombre"));
