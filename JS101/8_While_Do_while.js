/*
Estructura de un while
while(condicion) {
    // Bloque de código que se ejecuta
    // Si la condición es verdadera
}
*/
/*
Contemos un while
Armemos una función que cuente desde un número hasta llegar a otro.

Para este ejercicio te damos la función count ya declarada. Esta función va a recibir dos parámetros numéricos. Queremos que la función recorra desde el primer parámetro hasta el segundo y que imprima por consola el texto "El número actual es__ y es menor a__".

Por ejemplo, si le pasáramos los números 4 y 6 deberíamos ver algo así:

"El número actual es 4 y es menor a 6"
"El número actual es 5 y es menor a 6"
*/

function count(desde, hasta) {
    while(desde < hasta){
        console.log("El numero actual es" + desde + "y es meor a " + hasta)
    }
 }

/*
Estructura de un do-while
do {
    // Bloque de código que se ejecuta al menos una vez
    // y cada vuelta si la condicion es verdadera
} while ()

Encontrando el 5
Queremos construir una función que reciba un array de números como parámetro. 
La función deberá recorrer este array e imprimir por consola cada uno de los números. En caso de encontrar un 5, deberá cortar la ejecución e imprimir por consola el texto "Se encontró un 5!".

Para resolver este ejercicios DEBES utilizar el do-while.
*/

function encontreUn5(numeros){
    let i = 0
    do{
        console.log(numeros[i])
        } while(numeros[i] == 5 ){
            console.log("Se encontró un 5!")
    }
}

/*
Creando la tabla de multiplicar
Vamos a crear una función y asignarla a una variable!.

Para este ejercicio te damos la función tablaDeMultiplicar ya definida, la cual recibe 
un número como parámetro. Queremos que al ejecutarse la función muestre por consola 
la tabla de multiplicar del 1 al 10 del número que reciba.

Por ejemplo si el número que pasamos por parámetro es 5, la función deberá imprimir:

5 * 1 = 5
5 * 2 = 10

5 * 3 = 15

...

hasta llegar a multiplicarlo por 10.
*/ 

function tablaDeMultiplicar(numero) {
	let i = 1
	while(i<11){
		console.log (numero + " * " + i + " = " + numero*i)
		i++
	} 
}

tablaDeMultiplicar(5)