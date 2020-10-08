/* 
Ejercicio: Usando query string para filtrar
Imaginemos que tenemos una web que muestra productos. Nos gustaría poder mostrar el listado de todos los productos. Por defecto vamos a mostrar todos los productos sin importar a que categoría pertenecen y los vamos a ordenar alfabéticamente según el nombre de producto. Pero también queremos darle la posibilidad al usuario que filtre por categoría y ordene por otro campo (precio por ejemplo). Nos damos cuenta que la mejor opción para esto es usar una ruta que reciba un query string.


1. Crear la ruta "/productos".
2. A partir del request recuperar el query string y mostrarlo usando el método send del objeto response.
*/

const express = require('express');
const router = express.Router();

router.get('/productos',(req,res)=>{
res.send(req.query)
})

/*
Ejercicio: filtrando por precio
Tenemos un listado de celulares, cada uno con su precio.
Vamos a crear una ruta "/celulares" del tipo GET para listarlos a todos.
Para mostrar el listado debemos usar el método send del parámetro response.
Ahora bien, también nos gustaría poder filtrar la lista de celulares en función del precio. El usuario debería acceder a una url que tenga un query string con el parámetro "max". A partir de ese parámetro nosotros tenemos que ser capaces de devolver la lista pero sólo mostrando aquellos celulares cuyo precio no supere el valor del parámetro "max".

Es decir, si el usuario accede a la url /celulares?max=20000 deberíamos listar todos los modelos menos el "Samsung Galaxy A50".
*/ 

const express = require('express');
const router = express.Router();

const celulares = [
    {
        nombre: 'Motorola Moto E6 Plus',
        precio: 14999
    },
    {
        nombre: 'Motorola Moto G7',
        precio: 19999
    },
    {
        nombre: 'Alcatel 5033A',
        precio: 6999
    },
    {
        nombre: 'Samsung Galaxy A50',
        precio: 33499
    }
];

router.get('/celulares',(req,res)=>{
    res.send(celulares)
})


