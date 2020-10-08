/*

Fin de semana
El objetivo de este ejercicio es imprimir en consola un texto que irá variando 
según el día que contenga la variable dia. Para esto ya te presentamos un código hecho 
con if / else que tendrás que modificar y convertirlo a un switch, manteniendo el mismo resultado.
*/

let dia = 'jueves'
function finDeSemana (dia) {	

    switch(dia){
        case 'viernes':
            console.log('buen finde')
            break
        case 'lunes':
            console.log('buena semana')
            break
        default:
            console.log('buen dia')
    }
}

/* 
NO
Bueno, ya sabemos qué cosas podemos representar con arrays, y cómo hacerlo. 
Pero, ¿qué podemos hacer con ellos?

Empecemos por lo fácil: saber cuántos elementos hay en el array. 
Esto lo podemos hacer utilizando la propiedad length, de forma similar a lo que hacíamos 
con los strings. Para preguntarle a un array cuantos elementos tiene debemos indicar el array en 
cuestion seguido de un '.' y la propiedad que queremos acceder ("length").

Realizá las siguientes consultas utilizando el console.log para ver los resultados:

[].length
numerosDeLoteria.length
[4, 3].length
*/

let numerosDeLoteria = [22,40,12]

console.log([].length)
console.log(numerosDeLoteria.length)
console.log([4, 3].length)