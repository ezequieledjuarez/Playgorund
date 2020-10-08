/* 
Tipos de operadores
Vimos como declarar una variable y asignarle un valor, y probablemente te preguntes: ¿Para qué sirve almacenar datos en variables? Las variables nos permiten reutilizar el dato asignado en la misma con sólo invocar su nombre.


También algo muy importante, así como podemos hacer operaciones matemáticas como sumar (+) o restar (-) números podemos hacer lo mismo con las variables que los referencien.



/* ==========================
DE ASIGNACIÓN
========================== */

// El operador "=" sirve para asignar el valor 40 a una variable llamada "edad"

var edad = 40

/* ==========================
ARITMÉTICOS
========================== */

// Nos permiten hace operaciones matemáticas

10 + 15 //---> Suma
10 - 15 //---> Resta
10 * 15 //---> Multiplicación
10 / 15 //---> División
15++    //---> Incremento de uno en uno: 15 + 1
15--    //---> Decremento de uno en uno: 15 - 1
15 % 5  //---> Módulo. El resto obtenido de dividir 15 entre 5: 0
15 % 2  //---> Módulo. El resto obtenido de dividir 15 entre 2: 1

/* ==========================
DE COMPARACIÓN SIMPLE
========================== */

10 == 15 //---> Igualdad
10 != 15 //---> Desigualdad

/* ==========================
DE COMPARACIÓN ESTRICTA
========================== */

10 === 15 //---> Estrictamente igual (mismo valor y tipo de dato)
10 !== 15 //---> Compara si los operandos no son iguales y/o no del mismo tipo

/* ==========================
OPERADORES RELACIONALES
========================== */

15 > 10  //---> Mayor que...
15 >= 10  //---> Mayor igual que...
15 < 10  //---> Menor que...
15 < 10  //---> Mayor igual que...

/* ==========================
LÓGICOS
========================== */
/*
// Permiten combinar valores booleanos y su resultado a la vez también es un booleano

// && Todos sus valores deben evaluar como TRUE
(10 > 15) && (10 != 20) //---> 
*/

/* 
Operando
Declará y asigná dos variables: primerNumero y segundoNumero.

Luego declara las variables resultadoSuma, resultadoResta, resultadoMultiplicacion, 
resultadoDivision y en cada una almacena el resultado que corresponda.
*/

let primerNumero = 4;
let segundoNumero = 2;

let resultadoSuma  = primerNumero+segundoNumero;

let resultadoResta = primerNumero-segundoNumero;

let resultadoMultiplicacion = primerNumero*segundoNumero;

let resultadoDivision = primerNumero  / segundoNumero;
