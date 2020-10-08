/* 
Ejercicio: Asegurando la compatibilidad con PUT y DELETE
Ahora vamos a trabajar con rutas del tipo PUT y DELETE. Recordá que las URL del tipo PUT se suelen usar para modificar información, mientrás que las rutas del tipo DELETE se utilizan para eliminar registros. Dado que estos métodos no son soportados por todo los navegadores es necesario usar la dependencia method-override para asegurar la compatibilidad. Para eso, en este ejercicio, vas crear la constante methodOverride que requiera el módulo "method-override" y luego configurar el objeto app pasandole al método use la expresión methodOverride("_method").

Consejo: Recordá que cuando estés trabajando en tu proyecto la dependencia method-override no viene por defecto en node, va a ser necesario que la instales ejecutando el siguiente comando en consola: npm install method-override --save
*/

const express = require('express');
const app = express();
const methodOverride = require('method-override')

app.use(methodOverride('_method'))

/* 
Ejercicio: Enviando datos de un formulario mediante PUT
Los formularios en HTML sólo soportan los métodos GET y POST. Es por eso que en nuestros archivos node debemos usar la dependencia "method-override" para poder simular el envío de datos mediante PUT o DELETE. Pero también es necesario agregar en el atributo action de nuestros formularios un query string para que los datos se envíen correctamente. Dado el siguiente formulario modifica el action para que permita el envío de datos mediante PUT.
*/
/*

<html>
  <head>
    <title>Formulario de registro</title>
  </head>
  <body>
        <form action="usuarios/actualizar?_method=PUT" method="POST">


    </form>
  </body>
</html>

*/

/* 
exerciseProgressIcon
Ejercicio: Vamos a tratar de crear una ruta json style
Tenés un json con tres películas.

Vamos a tratar de crear una ruta para editar los datos de una película en particular. Un usuario va a tener que ser capaz de enviar datos a través de un formulario y nosotros debemos editar la película elegida. Para indicar la película a modificar nos va a llegar en la url el id correspondiente. Es decir que deberíamos crear una ruta del tipo PUT para los casos pelicula/1, pelicula/2, etc.

Para eso vamos a tener que a partir del objeto router crear una ruta del tipo PUT que responda a cualquiera de las urls antes mencionadas.
Debemos ser capaces de traer identificar la película dependiendo del id que nos pasen cómo parámetro y actualizar sus datos con aquellos que nos envían.
*/

let peliculas = [
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

const express = require('express');
const router = express.Router();

router.put('/pelicula/:id', (req,res) => {
    peliculas.forEach( pelicula =>{
        if(pelicula.id == req.params.id){
            pelicula.titulo = req.body.titulo;
            pelicula.duracion = req.body.duracion;
            pelicula.genero = req.body.genero;
        }
    })
})

/* 
Ejercicio: Eliminando datos de un ARRAY
Dado el siguiente array con productos, tenés que crear una ruta "/celular" del tipo DELETE que reciba un id y elimine un producto. Deberíamos crear una ruta para los casos celular/1, celular/2, etc.

Para eliminar el producto del array podemos usar la función filter igualando el array celulares a celulares.filter en donde dentro del método retornemos todos los productos que no coincidan con el id pasado por parámetro.

Si te resulta más práctico hacerlo de otra manera, ¡adelante! Lo importante es que el producto con el id pasado por parámetro sea removido del array celulares.
*/

let celulares = [
    {
        id: 1,
        nombre: 'Motorola Moto E6 Plus',
        precio: 14999
    },
    {
        id: 2,
        nombre: 'Motorola Moto G7',
        precio: 19999
    },
    {
        id: 3,
        nombre: 'Alcatel 5033A',
        precio: 6999
    },
    {
        id: 4,
        nombre: 'Samsung Galaxy A50',
        precio: 33499
    }
];

const express = require('express');
const router = express.Router()
router.delete('/celular/:id', function(req,res){
    let id = req.params.id
    celulares.forEach(celular=>{
        if(celular.id == id){
            let eliminar = celulares.indexOf(celular)
            celulares.splice(eliminar,1)
        }
    })
});