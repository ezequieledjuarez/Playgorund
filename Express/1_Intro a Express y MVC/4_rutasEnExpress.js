/* 
exerciseProgressIcon
Ruta get home
Exploremos los diferentes métodos que podemos usar con el módulo express.

Nuestro trabajo será, utilizando el método GET, crear una ruta hacia "/home" que devuelva la frase "Hola, estamos en el home". 
*/

const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send('Hola, estamos en el home')
})

/*
Ruta get perfil
Vayamos a nuestro perfil:

Queremos crear una ruta que use el método get y que apunte a "/perfil". Esta deberá devolver la variable saludo que está ya declarada.
*/

const express = require('express');
const app = express();

let saludo = "Bienvenido/a, ahora estamos en tu perfil"

app.get('/perfil', function(req,res){
    res.send(saludo)
})

/*
Ruta get agregar producto
Queremos enviar a la vista un producto vacío:

Para empezar, debemos crear la variable producto. Esta tendrá que almacenar un objeto con las siguientes propiedades: tipoProducto, precio y cantidad, en donde, cada una de ellas deberá tener como valor null, ya que, de momento, no tenemos ningún dato.

Por último, debemos crear una ruta que use el método get y que apunte a "/producto/agregar". Esta deberá devolver la variable producto que creaste.
*/ 

const express = require('express');
const app = express();

// Escribir tu código aquí
let producto = {
    tipoProducto : null,
    precio: null,
    cantidad: null
}
app.get('/producto/agregar', function(req,res){
    res.send(producto)
})

/* 
Ruta post agregar producto
Es momento de enviar algunos datos al servidor...

Para este ejercicio contamos con la variable producto ya declarada. Queremos que: a la propiedad tipoProducto le asignes el string "living", a la propiedad precio le asignes el número 1245 y a la propiedad cantidad le asignes el número 300.

Por último, te pedimos que crees una ruta que apunte a "/producto/crear". La misma deberá enviar la variable producto que almacena el nuevo producto que creaste.

¿Ya sabés qué método vas a usar para este ejercicio?
*/

const express = require('express');
const app = express();

let producto = {
  tipoProducto: 'living',
  precio: 1245,
  cantidad: 300
}

app.post('/producto/crear', function(req,res){
  res.send(producto)
})
