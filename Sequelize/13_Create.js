/* 

Creando un usuario
Imaginemos que tenemos un modelo de sequelize llamdo Usuario. Este modelo posee tres atributos: nombre, email, password, todos ellos del tipo string.

Lo que debemos hacer es a partir de este modelo insertar en la base de datos un usuario indicando un valor para cada atributo.

Para poder resolver esto recordá que debés usar el método create de tu modelo.
*/

const Usuario = require('model/usuario.js');

Usuario.create({
    nombre: 'Ezequiel',
    email: 'eze@eze.com',
    password: '1234'
})

/* 

Creando usuarios
En determinadas situaciones necesitamos subir más de un registro a la base de datos. Si bien podemos usar el método create varias veces, sequelize nos facilita esta tarea con el método bulkCreate. Este método recibe un array, en donde cada posición es un objeto con las mismas características del objeto que recibe el método create. Es decir, el método bulkCreate es como el método create, pero con la ventaja que permite insertar varios registros de una sola vez.

En este ejemplo tenemos el modelo Pelicula. Nuestro objetivo es insertar dos películas usando el método bulkCreate. Cada película a insertar tiene que tener un título y un género (para los nombres de los atributos usá "titulo" y "genero" sin tilde).
*/

const Pelicula = require('model/pelicula.js');

Pelicula.bulkCreate([
    {
        titulo: 'Avatar',
        genero: 'Ciencia ficcion'
    },
    {
        titulo: 'Matrix',
        genero: 'Ciencia ficcion'
    }
])

/* 
Productos Web
En este ejemplo tenemos el controlador productoController que tiene el método create.  A su vez hay un formulario que tiene los campos nombre y precio y que envía esos datos a nuestro controller, mediante un request del tipo POST.

La idea del ejercicio es poder recuperar ambos campos y usando el modelo Producto e insertarlos en nuestra base.

Para ello va a ser necesario usar el método create del modelo Producto. Como parámetro del método debemos pasar un JSON con los atributos nombre y precio. El valor para estos atributos los vamos a tener que recuperar a partir del request.
*/

const Producto = require('model/producto.js');

const productoController = {
  create: (req, res) => {
    Producto.create({
      nombre: req.body.nombre,
    precio: req.body.precio
    })
  }  
}

