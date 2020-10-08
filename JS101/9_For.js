/* Estructura básica
for(inicio, condicion, modificador) {
    // Código que se ejecutará en cada repetición
}
*/

//Vamos a programar una función que se comporte como un loro. Sí, todo lo que "oye", ¡lo repite!. 
//La función llamarse loro y debe recibir como parámetro el texto y repetirlo 5 veces por consola.

/*function loro(texto){
    for(let i = 0; i<=4; i++){
        console.log(texto)
    }
}

let texto = 'Buen día'
loro(texto)*/

/*¡Vamos a crear una función y asignarla a una variable!
En este ejercicio deberas hacer dentro de la función noParesDeContarImparesHasta un for que 
cuente de 0 hasta un número. La función deberá retornar cuántos números impares se contaron hasta 
llegar al número.
*/

function noParesDeContarImparesHasta(numero){
let impares=0;
    for(let i=0; i<=numero;i++){
        if(i%2 !==0){
            impares++
        }
    }
    console.log(impares)
}

noParesDeContarImparesHasta(5)
