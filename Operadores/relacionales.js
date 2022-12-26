/*
    a<b (a es menor que b),
    a>b (a es mayor que b),
    a>=b (a es mayor o igual que b),
    a<=b (a es menor o igual que b),
    a=b (a es igual a b,asignamos el valor de b a la variable a),
    a==b (¿a es igual que b?,solo compara valores y no el tipo de dato.
          Me da como resultado un booleano),
    a===b (¿a es igual que b?,compara el valor de ambas variables y el tipo de dato.
           Me da como resultado un booleano), 
           **Es buena practica utilizar esto, es mejor utilizar === que ==**
    a!=b  (a es distinto que b,solo compara el valor pero no el tipo de dato.
          Me da como resultado un booleano),
    a!==b (a es distinto que b,compara tanto valor como tipo de dato.
           Me da como resultado un booleano);
*/
let a = 8;
let b = 10;
console.log(a<b);