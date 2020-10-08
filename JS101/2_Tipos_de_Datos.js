//Una variable de cada tipo
/* ==========================
CADENA DE CARACTERES (STRING)
========================== */

// Número entero
var edad = 35;

// Número con decimales
var precio = 150.65

/* ==========================
CADENA DE CARACTERES (STRING)
========================== */

// Con comillas simples
var nombre = 'Mamá Luchetti';

// Con comillas dobles obtenemos el mismo resultado
var ocupacion = "Master of the sopas";

/* ==========================
LÓGICOS O BOOLEANOS
========================== */

var laClaseEstaReCopada = true;
var laClaseQueVieneHayAsado = false;
/*
Una variable de cada tipo
Para este ejercicio, te pedimos que declares 4 variables de tipo let con los nombres: 
verdadero, nada, texto y numero. A cada una de ellas, deberás asignarle el tipo de dato que sugiera 
su nombre según corresponda. 
*/

let verdadero = true;
let nada = null;
let texto = 'Esto es un texto';
let numero = 0;

/*
Usando Number()
var unNuevoNumero = Number('50');

Usando Number()
Ya vimos cómo declarar una variable y asignarle el tipo de dato que queramos como valor. Ahora, 
creemos 3 variables numéricas pero esta vez haciendo uso de la función nativa Number(). 
Las mismas se deberán llamar positivo, negativo y decimal, y cada una de ellas deberá almacenar 
un número que coincida con su nombre. En la variable positivo almacenar un número positivo, 
y así sucesivamente.
*/

let positivo = Number('10');
let negativo = Number('-10');
let decimal = Number('0,5')

//Usando parseInt()
// En esta variable debería quedar guardado solo el número 10
var numeroRedondeado = parseInt("10.59");

// En esta variable debería quedar guardado solo el número 51
var numeroRedondeado = parseInt("51.598597");

/*

Usando parseInt()
Una buena forma de aprender a usar una función nativa como ésta es pasarle distintos tipos de datos 
y ver qué pasa en cada caso. Vamos a hacer uso de esa práctica.
Para este ejercicio te damos dos variables declaradas. Te pedimos que:

--> A la variable nan le asignes lo que devuelve la función parseInt() cuando le pasamos 
un dato no numérico

--> A la variable correcto le asignes lo que devuelve la función parseInt() cuando le pasamos 
un dato numérico
*/ 

const nan = parseInt('NaN');
const correcto = parseInt('8');

