/* ==========================
CONDICIONAL SIMPLE
========================== */

/*
if(condicion) {
    // código a ejecutar si la condición es verdadera
}

/* ==========================
CONDICIONAL CON BLOQUE "ELSE"
========================== */

/*
if(condicion) {
    // código a ejecutar si la condición es verdadera
} else {
    // código a ejecutar si la condición es falsa
}

/* ==========================
CONDICIONAL CON BLOQUE "ELSE IF"
========================== */
/*
if(condicion) {
    // código a ejecutar si la condición es verdadera
} else if (otra condicion) {
    // código a ejecutar si esta otra condicion es verdadera
} else {
    // código a ejecutar si todas las condiciones fueron falsas
}
*/

/*
MI primer if
Lograremos con este ejercicio realizar un simple if.

Declara una variable con el nombre dato y asignarle un valor booleano.

Luego deberás hacer un if que evalúe esa variable y si el valor es igual a  
true que imprima por consola "es true", caso contrario que imprima por consola "es false".
*/
 

let dato = true;

if(dato){
    console.log("es true") 
} else
    console.log("es falso") 

/*  
Igualdad, if y else
¡Vamos a crear una función y asignarla a una variable!

En este ejercicio te damos una variable llamada lenguaje, que tiene asignado un String. 
Tu trabajo ahora es construir un condicional if / else para que, si la variable contiene 
"javascript" imprima por consola el texto "Estoy aprendiendo", 
de lo contrario que imprima"Lo aprenderé más adelante".
*/

/*
Igualdad, if y else
¡Vamos a crear una función y asignarla a una variable!

En este ejercicio te damos una variable llamada lenguaje, que tiene asignado un String. 
Tu trabajo ahora es construir un condicional if / else para que, 
si la variable contiene "javascript" imprima por consola el texto "Estoy aprendiendo", 
de lo contrario que imprima"Lo aprenderé más adelante".
*/

let lenguaje = "javascript";

if(lenguaje === "javascript"){
    console.log("Estoy aprendiendo")
}else{
    console.log("Lo aprenderé más adelante")
}

/* 
¿Puede pasar cosme fulanito?
¡Vamos a crear una función y asignarla a una variable!

Completa la función puedePasar para que analizando el nombre que recibe por parámetro
determine si la persona puede pasar o no. Si la persona se llama "Cosme Fulanito" 
no lo dejara pasar y lo indicara retornando false, 
si la persona se llama de otra forma lo va dejar pasar y lo indicara retornando true.
*/

function puedePasar(nombre){
    if(nombre === "Cosme Fulanito"){
        return false;
    }
    else{
        return true;
    }
}