/*
Pasando un callback
Vamos a crear tres funciones y ver cómo empezar a trabajar con callbacks.

La primera función se llamará doble la cual recibirá un número y retornará el doble.

La segunda función se llamará triple la cual recibirá un número y retornará el triple.

La tercera función se llamará apply y recibirá por parámetro un valor y una función. La misma retornará el valor de aplicar dicha función al valor que recibió.

Ejemplo:

apply(2, doble); // 4
apply(4, triple); // 12
*/

function doble (n1){
    return n1*2
}

function triple(n1){
    return n1*3
}

function apply (n1, op){
    return op(n1)
}

/*
Hagamos una calculadora
Vamos a ver cómo podemos crear una función que nos sirva como calculadora. Empecemos con algo sencillo...

Creemos cuatro funciones que realicen las operaciones principales de una calculadora.Tu trabajo será definir la función suma, resta, multiplicacion y division. Cada una de ellas recibirá dos parámetros y deberá realizar la operación matemática según corresponda. Por ejemplo, la función suma deberá retornar la suma de ambos parámetros, la función resta la resta de ambos parámetros, y así sucesivamente.
Ahora sí, con esas funciones ya definidas, creemos la función calculadora. Esta función recibirá dos parámetros numéricos y una función, que será nuestro callback.
*/

function suma(n1,n2){
    return n1 + n2
}

function resta(n1,n2){
    return n1 - n2
}

function division(n1,n2){
    return n1 / n2
}

function multiplicacion(n1,n2){
    return n1 * n2
}

function calculadora(n1,n2,op){
    return op(n1,n2)
}

console.log(4,3,resta)

/*
Pasando un callback reloaded
Tu tarea ahora es crear dos funciones.

La primera función debe llamarse agregarHttp . La misma recibe por parámetro una URL a la cual le concatena el String "http://" al comienzo de esa URL y luego retorna ese valor. La segunda función se llama procesar  y recibe una lista de sitios web y una función. La función procesar  devuelve un array conteniendo todos los resultados de aplicar a cada elemento la función pasada.
*/

function agregarHttp(texto){
    let agregar = 'http://'
    return agregar.concat(texto)
}

function procesar(sitios,funcion){
    let modificado = sitios
    for(let i = 0; i<sitios.length;i++){
       modificado[i] = funcion(sitios[i])
    }
    return modificado
}