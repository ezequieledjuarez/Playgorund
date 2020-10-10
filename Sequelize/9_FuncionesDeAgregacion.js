/* 
Funciones de agregación
Sequelize nos permite iteractuar con nuestro modelos utilizando las mismas funciones de agregación que ya conocemos de MySQL, como por ejemplo: max, min, count, sum, etc.

En este caso queremos recupear de la base de datos el precio cuyo valor sea el mayor de entre todos los precios de nuestros productos.

Para ello podemos usar el método max sobre nuestro modelo Producto.

Recordá que el método max espera el nombre de la columna.

Finalmente recuperá el resultado dentro del método then y mostralo con un console log: then(mayorPrecio => {console.log(mayorPrecio)})
*/

const Producto = require('model/productos.js');

Producto.max('precio')
.then(mayorPrecio=>{
    console.log(mayorPrecio)
})

/* 
Usando Método Count
Dado el modelo Usuario contar la cantidad total de usuarios que se encuentran en la base de datos.

Para ello será necesario utilizar el método count del modelo Usuario.

Mostrar el resultado con un console log
*/

const Usuario = require('model/usuarios.js');

Usuario.count()
.then(resultado=>{
    console.log(resultado)
})