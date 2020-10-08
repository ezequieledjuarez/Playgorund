/*
Declarar funciones
Vamos a empezar a practicar como crear funciones.

Tu tarea aquí es crear una función que se va a llamar ejemplo y tiene que devolver un String 
diciendo "hola, soy una función".
*/

function ejemplo(){
    return "hola, soy una función";
}

ejemplo();

/*
Declarando funciones en variables
¡Vamos a crear una función y asignarla a una variable!

Crea una función con el nombre ejemplo. La misma debe retornar un String que diga: 
"hola, soy una función expresada".
*/

let ejemplo = function ejemplo(){
    
    return  "hola, soy una función expresada"
}
ejemplo();
/*
Funciones con parámetros
En el ejemplo que te presentamos hay una función que ya esta creada. Pero sucede que cuando 
la invocamos, no funciona. Eso es porque la función necesita ciertos parámetros y no los tiene.

Tu deber es modificar el código que ya esta escrito para agregarle los parámetros que la función 
necesita.
*/

function saludar(nombre, apellido) {
    return 'Hola, ' + nombre + ' ' + apellido + '!';
}

/*
Hagamos una función que nos permita reconocer números pares.

Crea la función esPar. Esta debe recibir un número como parámetro y deberá devolver un boolean 
(true/false) indicándonos si ese número es divisible por dos.
*/

function esPar(n){
    let esPar = false;
    if(n%2 == 0){
        esPar = true;
    }
    return esPar;
}

/*Declarando tres funciones
¿Te acordás cuando declarábamos variables para poder utilizarlas luego? Bueno, aquí podemos hacer 
algo similar. Pero en lugar de declarar variables (estructuras que contienen información), 
podemos declarar funciones (estructuras que procesan información).

Escribí las siguientes tres funciones:

anterior: recibe un número como parámetro y devuelve ese número menos uno.
triple: recibe un número como parámetro y devuelve el triple de ese número.
anteriorDelTriple: recibe un número como parámetro y, utilizando las dos funciones anteriores 
tendrás que devolver el número. recibido multiplicado por 3 (tres) y al resultado restarle 1 (uno).
*/

function anterior(n){
    return n-1
}
function triple(n){
    return n*3
}

function anteriorDelTriple(n){

    return anterior(triple(n))
}