/* 
Trayendo productos ordenados
En este ejercicio el objetivo va a ser traer todos los productos ordenados por precio, de menor a mayor.

Recordá que dentro del método findAll podés pasar un JSON que tenga como clave la palabra order y cuyo valor sea un array de array indicando sobre que columna o columnas vamos a ordenar y de que tipo va a ser el ordenamiento: ASC o DESC.
*/

const Producto = require('model/productos.js');

Producto.findAll({
order:[["precio","ASC"]]}).then(productos => {
    
	console.log(productos)
});

/* 
Paginando resultados
Cuando devolvemos al usuario un listado por lo general es recomendable ir paginando esos resultados para no traer tanta información junta de la base de datos.

En este ejemplo tenemos estamos ejecutando un findAll sobre el modelo Producto. El objetivo va a ser pasar un parámetro al méotdo findAll para ejecutar un limit de MySQL y traer tan sólo los primeros 5 productos.

*/
const Producto = require('model/productos.js');

Producto.findAll({
limit:5}).then(productos => {
	console.log(productos)
});
