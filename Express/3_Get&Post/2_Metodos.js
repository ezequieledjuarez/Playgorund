/* 
Vamos a crear nuestra primera ruta con express.
Vamos a crear nuestra primera ruta con express. Para ello creá la constante llamada express y asignale el módulo express.

Luego, creá la constante llamada router y asignale el objeto Router de express.

Finalmente, usuando la constante router creá una ruta "/películas" que responda al método GET.

Para checkear que todo está funcionando hacé que la ruta devuelva la respuesta "Listado de películas".
*/

const express = require('express')


const router = express.Router()

router.get('/peliculas', (req,res)=>res.send("Listado de películas"))