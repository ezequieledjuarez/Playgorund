/*
OCULTAR
Modularicemos las rutas para las series.

Queremos que el archivo series.js administre TODOS los request del recurso. Te pedimos que, como primer paso, crees la variable express y almacenes en ella el módulo express.

Luego, deberás crear la variable router y almacenar en ella la ejecución del método que nos permite manejar un sistema de rutas.
*/ 

const express = require('express')
const router = express.Router();

/*Instanciar servidor
Veamos cómo levantar un servidor con Express.

Nuestro trabajo será instanciar un servidor en el puerto 8000. A su vez, queremos que se muestre por consola la frase "Levantando un servidor con Express" una vez que el servidor esté corriendo, para verificar que el mismo se levantó correctamente.
*/
const express = require('express');
const app = express();

app.listen(8000, () => {
    console.log('Levantando un servidor con Express')
}) 