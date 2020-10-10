/* 
Utilizando Promesas
Vamos a practicar un poco el manejo de promises (promesas) en javascript. Recordá que las promesas nos permiten ejecutar código asincrónico, es decir, que a una función que devulve una promesa puedo concatenarle el método then, que sólo se va a ejecutar cuando la función haya concluido. En este ejemplo tenemos la función buscarProducto, que espera un id de producto y devulve una promesa.

El objetivo nuestro es concatenar el método then al final de la ejecución de la función y hacer un conosle log de parámetro que recibe.
*/

buscarProducto(1)
.then(function(producto){
    console.log(producto)
});

/* 
¿Y si la promesa falla?
Las promesas, además de manejar el resultado de código asincrónico, también nos permite saber si el código no se pudo ejecutar con éxito. El manejo de errores en las promesas se hace concatenando al final del método (o métodos) then un método espcial llamdo catch. Este método catch se va a ejecuar sólo si hubo un error en alguno de los métodos then anteriores, es decir, si alguna de las promesas falló.

En este ejemplo tenemos la función buscarProducto. En el método then, mostramos por consola el producto encontrado. Nuestro objetivo ahora es agregar un método catch para el caso de que buscarProducto fallé. Dentro del método catch vamos a agregar un console log del error.
*/
buscarProducto(1).then(producto => {
    console.log(producto);
})
.catch(function(e){
    console.log(e)
})