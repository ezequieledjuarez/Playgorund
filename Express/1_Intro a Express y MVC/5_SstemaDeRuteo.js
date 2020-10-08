/* 

Modularizar Rutas
Modularicemos las rutas para las series.

Queremos que el archivo series.js administre TODOS los request del recurso. Te pedimos que, como primer paso, crees la variable express y almacenes en ella el módulo express.

Luego, deberás crear la variable router y almacenar en ella la ejecución del método que nos permite manejar un sistema de rutas.
*/

const express = require('express')
const router = express.Router()

/* 
Exportar rutas
En este ejercicio ya tenemos definidas las rutas relacionadas con los request de series.

Tu trabajo será hacer visible ese código para que podamos acceder al mismo desde otros archivos.

¿Te acordás cómo hacerlo? ¿Quién es el encargado de modularizar todas estas rutas definidas?
*/

const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
});
router.get('/:genero', (req,res) => {
});
router.get('/crear', (req,res) => {
});

module.exports = router


/* 
Usando rutas
Desde el archivo index.js queremos acceder a las rutas que expone el archivo series.js. Tu trabajo será requerir ese módulo y almacenarlo en la variable rutasSeries. Por último, queremos que sea ese módulo el encargado de manejar todas las solicitudes que lleguen del recurso series.

Antes de empezar... Tené en cuenta que estamos manejando un sistema de rutas y la organización de directorios es MUY importante, por lo tanto el archivo series.js se encuentra almacenado en la carpeta routes.
*/
const express = require('express');
const app = express();
const rutasSeries = require('./routes/series')
app.use('/series', rutasSeries)