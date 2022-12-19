var hola = "Hola Mundo";
let hello = "HELLO WORLD";
console.log(hola);
console.log(hello);

//Ambito global
console.log("***********var************");
var musica = "Rock";
console.log("Valor de la variable musica antes del bloque: "+musica);
{
    var musica = "Pop";
    console.log("Valor de la variable musica dentro del bloque: "+musica);
}
console.log("Valor de la variable musica despues del bloque: "+musica);

//Ambito de bloque
console.log("***********let************");
let musica2 = "Rock";
console.log("Valor de la variable musica2 antes del bloque: "+musica2);
{
    let musica2 = "Pop";
    console.log("Valor de la variable musica2 dentro del bloque: "+musica2);
}
console.log("Valor de la variable musica2 despues del bloque: "+musica2);
