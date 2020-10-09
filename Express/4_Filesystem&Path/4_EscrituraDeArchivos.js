/* 
Ejercicio: Usando writeFileSync
La función writeFileSync la cual viene en el paquete File System nos va a permitir crear documentos en nuestro proyecto.

Vamos a probar su funcionamiento creando un documento llamado "bienvenida.txt" al cual le vamos a pasar el texto "Hola Mundo".
*/

const fs = require('fs');
fs.writeFileSync('bienvenida.txt', 'Hola Mundo')

/* 
Ejercicio: Guardando un JSON
Dado el siguiente json guardarlo dentro de un archivo llamado peliculas.json

Recordá que los objetos de tipo json no se pueden guardar directamente en un archivo de texto, primero hay que transformarlos en un string. Para eso tenemos que usar JSON.stringify().
*/

const fs = require('fs');

const peliculas = [
    {
        id: 1,
        titulo: 'Spider-Man: Lejos de casa',
        duracion: 129,
        genero: 'Aventura'
    },
    {
        id: 2,
        titulo: 'Toy Story 4',
        duracion: 100,
        genero: 'Animación'
    },
    {
        id: 3,
        titulo: 'X-Men: Fénix Oscura',
        duracion: 113,
        genero: 'Acción'
    }
];

const pelis = JSON.stringify(peliculas)

fs.writeFileSync('peliculas.json', pelis)

/* 
Ejercicio: Guardando en un JSON
En el siguiente sitio tenemos configurada la ruta para crear productos. La ruta es "/crear-productos" del tipo POST. También ya tenemos un producto preseteado pero cuyos atributos, nombre y precio, están nulos.

Nosotros vamos a tener que recibir la infomación que viene por POST, setear los atributos del producto (nombre y precio) y finalmente guardarlo en un archivo llamado "productos.json".
*/

const express = require('express');
const app = express();
const fs = require('fs');
const router = express.Router();

var producto = {
    nombre: null,
    precio: null,
};

router.post('/crear-producto', (req, res) => { 
     producto = {
    nombre : req.body.nombre,
    precio: req.body.precio
    }
fs.writeFileSync('producto.json', JSON.stringify(producto))
});

app.use(express.urlencoded({ extended: false }));
app.use( express.json() );
app.use(router);
app.listen(3000);

/* 
Ejercicio: Agregando contenido en un .txt
Tenemos un archivo llamado "pendientes.txt" con una lista de tareas.

El objetivo es agregar a la lista la tarea "aprender node" sin borrar el contenido actual.
*/

const express = require('express');
const fs = require('fs');

fs.appendFileSync('pendientes.txt', 'aprender node')