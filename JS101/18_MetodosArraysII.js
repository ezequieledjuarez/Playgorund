/*
filter con números
¡Empecemos con algo sencillo!

Tenemos el array numeros definido y queremos filtrar aquellos que sean mayores a 18.

Tu trabajó será definir la variable mayores y almacenar en ella los números que cumplan con esa condición, utilizando el método filter.
*/

let numeros = [12, 34, 22, 46, 18, 29, 44, 43, 39];

let mayores = numeros.filter(function(numero){
    return numero>18
})