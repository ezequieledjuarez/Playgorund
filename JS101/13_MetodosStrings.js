/* ==========================
.length
- Retorna la cantidad de caracteres de un string
========================== */

var serie = "Mad Men"
serie.length; //--> Devuelve 7

/* ==========================
.indexOf()
- Busca uno o más caracteres dentro del string al que le aplicamos el método
========================== */

var saludo = "¡Hola! Estamos programando";
saludo.indexOf('Estamos') //--> Devuelve 7

/*
    ¡ -> 0
    H -> 1
    o -> 2
    l -> 3
    a -> 4
    ! -> 5
      -> 6
    E -> 7
    s -> 
    
    etc...
*/

// Si solo pasamos una letra, el valor de retorno será la primera coincidencia
saludo.indexOf('o') //--> Devuelve 2.

// Si no encuentra lo que pasemos por parametro, el valor de retorno sera -1
saludo.indexOf('Asado') //--> Devuelve -1
saludo.indexOf('9') //--> Devuelve -1
saludo.indexOf('x') //--> Devuelve -1

/* ==========================
.slice()
- Corta y devuelve una parte del string donde se aplica
========================== */

var frase = "Breaking Bad Rules!";

frase.slice(9, 12) //--> Devuelve 'Bad'
frase.slice(13) //--> Devuelve 'Rules'
frase.slice(-10) //--> ¿Qué devuelve esto? Tarea para casa :)

/* ==========================
trim()
- Elimina espacio al princio y final de un string
- NO recorta los espacios intermedios
========================== */

var nombreCompleto = "        Homero Simpson     ";
nombreCompleto.trim(); //--> Devuelve "Homero Simpson";

/* ==========================
split()
- Separa un string en varios strings a través del caracter o caracteres que indiquemos
========================== */

var frase = "En una galaxia muy muy lejana";
frase.split(' ') //--> Aclaramos que corte este string donde encuentre ' ' (espacios)
// Devuelve entonces ['En', 'una', 'galaxia', 'muy', 'muy', 'lejana...'];

/* ==========================
replace()
- Reemplaza una parte de un string por otra
========================== */

var otraFrase = 'Aguante Python!';
frase.replace('Phyton', 'JS') //--> Devuelve 'Aguante JS!'
frase.replace('Phy', 'JS') //--> Devuelve Aguante 'Aguante JSton!'

/*
Completar URL
Crea una función llamada dominio que recibirá un String como "digitalhouse.com.ar" 
y su función será devolver "http://www.digitalhouse.com.ar".
 */

function dominio(texto){
    let agregar = 'http://www.'
    return agregar.concat(texto)
}


/*

Contar los caracteres
Lo primero que necesitas es declarar una variable llamada "texto" asignándole como valor un texto, 
el que vos quieras. Luego, utilizando la propiedad length tendrás que imprimir en consola 
el total de caracteres que contiene la frase.
*/

let texto = 'Buenas noches'
console.log(texto.length)

/*
Reemplazo fast fast
Tu misión ahora es crear una funcion llamada "reemplazoFastFast" que reciba un texto, 
una palabra a buscar y la palabra que va a reemplazar a la buscada. L
a función deberá devolver el texto con la palabra reemplazada.

Ejemplo:

let textoSinGuiones = reemplazoFastFast('Este texto es mala onda','mala','buena');
console.log(textoSinGuiones) //'Este texto es buena onda'

 */

function reemplazoFastFast(texto, reemplaza, pone){
    let textoNuevo =  texto.replace(reemplaza, pone)
    return textoNuevo
}

let test = reemplazoFastFast('Este es un texto para verificar', 'verficar', 'aprender')
console.log(test)

/*
¿Están hablando de mi?
Para el siguiente ejercicio vamos a suponer que tenemos un texto que copiamos y queremos saber si el texto menciona una palabra en particular.
Para lograrlo tendrás que crear una función llamada menciona la cual recibirá dos parámetros: un texto que es donde vamos a buscar, y una palabra que es la que vamos a averiguar si se menciona en el texto . La misma función devuelve true en el caso de encontrar la palabra.

Ejemplo:

menciona('Existen muchos lenguajes de programación y javascript es uno de ellos','programacion'); // true
*/

function menciona(texto, palabra){
    if(texto.indexOf(palabra) !== -1){
        return true
    }else{
        return false
    }        
}

/*
Solo el nombre

Teniendo como punto de partida la cadena de texto "¡Hola!, soy Carli" deberás recortar la misma para poder obtener el nombre "Carli" en una nueva variable llamada licenciada.

IMPORTANTE: Para la resolución tendrás que usar la función slice().
*/

let texto = "¡Hola!, soy Carli"
let licenciada = texto.slice(12,17)
console.log(licenciada)