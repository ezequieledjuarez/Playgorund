/* 
exerciseProgressIcon
Ejercicio: Conociendo el modulo path
Vamos a explorar un poco el módulo path. Este módulo nos provee una forma sencilla de trabajar con directorios y rutas de archivos.

Para empezar creá la constante path usando const y asignale el módulo path de Node.

Luego hacé un console log para mostrar el contenido de la constante path definida en el punto anterior.
*/

const path = require('path')
console.log(path)

/* 
Ejercicio: Usando el método join
El módulo path nos permite trabajar con el método join con el cual podemos crear una ruta pasando como parámetros separados cada una de las partes que la componen.

Usando el método join del módulo path vamos a crear la ruta /tecnologia/videojuegos/mario-kart.

Para eso va a ser necesario que creés la constante path y le asignes el require de 'path'.

Creés la variable ruta y le asignes el resultado de ejecutar el método join de path.
*/

const path = require('path')

const ruta =  path.join("tecnologia","videojuegos","mario-kart")

/*
Ejercicio: Usando el método extname
Tenemos almacenado el nombre de un archivo en la constante "movies".

Vamos a crear una nueva constante llamada extension y le vamos a asignar la extensión del archivo que tenemos guardado en movies.

Para esto vamos a usar el método extname de path.
*/ 

const path = require('path');
const movies = 'movies.json';
const extension = path.extname(movies)

/* 
Ejercicio: Usando el método dirname
En la constante logo tenemos guardada la ruta completa a una imagen.

Nosotros vamos a tener que declarar una constante llamada directorio y le vamos a asignar la ruta definida en la constante logo, sin el nombre de archivo.

Para esto vamos a usar el método dirname del módulo path.
*/

const path = require('path');
const logo = '/assets/images/logo.png';

const directorio =  path.dirname(logo)