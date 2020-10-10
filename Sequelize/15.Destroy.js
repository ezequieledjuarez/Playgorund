/* 
Eliminar Película
De la misma manera que insertamos y actualizamos datos en nuestra base, sequelize también nos permite eliminar registros. Para esta tarea nos provee el método destroy, que lo podemos ejecutar sobre cualquiera de nuestros modelos. Este méotdo espera como parámetro un JSON con una query del tipo where para identificar la fila a eliminar.

El objetivo de este ejercicio es eliminar la película con id igual a 3.
*/

const Pelicula = require('model/pelicula.js');

Pelicula.destroy({
  where:{
    id:3
  }
})

/* 
Eliminar Usuario
De igual forma que se puede eliminar un registro por su id, se puede hacer lo mismo por alguna otra columna que identifique al elemento unívocamente.

En este ejercicio vamos a borrar un usuario en función de su email. El objetivo es eliminar al usuario cuyo email sea igual a "kenny@south-park.com"

Para ello vamos a utilizar el método destroy del modelo Usuario, pasando como parámetro una query que haga un where por email.
*/

const Usuario = require('model/usuario.js');

Usuario.destroy({
    where:{
        email: "kenny@south-park.com"
    }
})

/* 
Eliminar Varios Usuarios
El método destroy permite al igual que el select, pasar otros operados a la query. En vez de utilizar una comparación por el operador igual (la comparación por defecto) podemos usar un like.

En este ejemplo vamos a eliminar a todos los usuarios cuyo proveedor de correo sea aol.com. Es decir aquellos cuyo email termine en @aol.com.

Para ello vamos a ejecutar el método destroy del modelo Usuario. Dentro del where (en el método destroy) vamos a pasar un JSON con el nombre de la columna y cuyo valor sea un nuevo JSON con la siguiente sintaxis: email: { [Op.like]: '%aol.com'}

*/

const Sequelize = require('sequelize');
const Usuario = require('model/usuario.js');
const Op = Sequelize.Op;

Usuario.destroy({
     where: {
         email: { [Op.like]: '%aol.com'
         }
     }
})