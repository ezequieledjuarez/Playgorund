/* 
Ejercicio: ¿Qué pasa si el usuario ingresa a una ruta que no existe?
Ya tenemos nuestra aplicación casi lista. Fuimos agregando rutas y llamándolas con app.use(). Nos falaría agregar la lógica para los casos en que el usuario ingrese por url a una sección que no exista, es decir, que no haya una ruta seteada para esa dirección.

Para eso vamos a setear una nueva línea al final de nuestro código en donde hamos uso de app.use(). El método use va a recibir un callback el cual va a tener tres parámetros: req, res y next. Dentro de este callback vamos a usar el parámetro res para retornar el status 404 y mostrar nuestra vista llamada "not-found".

*/

const express = require('express');
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hola mundo');
});

// Otras rutas más

app.use(router);
app.use((req,res,next) =>{
    res.status(404).render('not-found')
})