/* 
Actualizando el precio
Tenemos en nuestra base un producto cuyo id es igual a 1. Nuestro objetivo es actualizar el precio con el valor 1234.

Para esto vamos a utilizar el método update de nuestro modelo Producto. El método update recibe dos parámetros. El primero es un JSON en donde cada atributo es un nombre de columna y cada valor es aquel que queremos guardar en nuestra base. El segundo parámetro es una JSON con una query para identificar que registros se deben actualizar.
*/

const Producto = require('model/producto.js');

Producto.update({
    precio:1234,
},
{
    where:
    {
        id:1
    }
})


/* 
Actualizando Serie
En determinadas circunstancias podemos usar el método update para actualizar más de un registro.

En este ejemplo queremos cambiar el valor de la columna "genero" de todas aquellas series cuyo género sea igual a "comedia" y reeplazarlo por el valor "sitcom".

Para el segundo parámetro del método update debe hacer un wehre por la columna "genero".
*/

const Serie = require('model/serie.js');

Serie.update({
    genero: "sitcom"
  },
  {
  where:{
    genero : "comedia"
  }
})

/* 
Actualizando Usuario
Para algunos casos vamos a necesitar actualizar un registro en la base o crearlo en caso que no exista. Para estos casos podemos usar el método upsert de sequelize.

En este ejemplo vamos a actualizar un registro de usuario. Vamos a pasar como valores para el upsert el email y la edad. Si el usuario ya existe debemos actualizar la edad, caso contrario debemos insertar el usuario (con email y edad) en la base.

Recordá que para usar el upsert en los atributos debés pasar al menos uno que sea único (en este caso el email), para así poder identificar el registro en la base.
*/
const Usuario = require('model/usuario.js');

Usuario.upsert({
        email: "eze@eze.com",
        edad: 26
    },
     { 
         where:{
             email:"eze@eze.com"
         }
})