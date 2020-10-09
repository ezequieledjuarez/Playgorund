/* 
Ejercicio: Probando el método readFileSync
El módulo File System viene con una funcionalidad que nos va a permitir leer documentos de forma sencilla.

El método readFileSync recibe como parámetro el nombre del archivo que necesitamos leer y nos devuelve un string con su contenido. También recibe un segundo parámetro que indica el formato es que debe leer y devolver el contenido del archivo. Este parámetro es un json con el siguiente formato: {encoding: 'utf-8'}

Vamos a probar el funcionamiento de readFileSync leyendo el contenido del archivo "tareas.txt".

Guardá el contenido del archivo "tareas.txt" en una constante llamada "tareas" y finalmente hacé un consolo.log para mostrar el contenido por consola.
*/

const fs = require('fs');

const  tareas = fs.readFileSync('tareas.txt', {encoding: 'utf-8'})

console.log(tareas)

/* 
Ejercicio: Read the JSON
Tenemos un archivo llamado productos.json que tiene una cadena de texto con un json de productos.

Usando readFileSync almacená el contenido de productos.json en una constante llamada productos y mostralo con un console.log.

No te olvides que el json dentro del archivo está en formato de cadena de texto, por lo que puede ser necesario utilizar JSON.parse para convertirlo en objeto.
*/
const fs = require('fs');


const  productos = fs.readFileSync('productos.json', {encoding : 'utf-8'})

let product = JSON.parse(productos)

console.log(product)

/* 
Ejercicio: Read the JSON, pero en forma sincrónica por favor
Tenemos guardada una película en el archivo pelicula.json.

Usando readFileSync almacená el contenido de pelicula.json en una variable llamada pelicula.

Convertí el valor de la variable pelicula en un json usando JSON.parse

Finalmente hacé un cosole.log para mostrar únicamente el título de la pelicula
*/

const fs = require('fs');

let pelicula =  fs.readFileSync('pelicula.json', {encoding: 'utf-8'})

pelicula = JSON.parse(pelicula)

console.log(pelicula.titulo)