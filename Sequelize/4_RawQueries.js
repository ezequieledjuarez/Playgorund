/* 
Usando método query
Usando el método query del objet sequilize ejecutá la siguiente consulta: "SELECT * FROM usuarios".

Recordá que el método query es asincrónico y devuelve una promesa. Por tanto, luego de ejecutar el méotdo query es necesario que concatenes el método then para recuperar la respuesta. Dentro del método then hace un console log del resultado devuelto.

Finalmente agrega el méotdo catch para capturar el error. Dentro de méotdo catch hace un console log del error.
*/

const dbConfig = require('../config/database');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('config');


sequelize.query("SELECT * FROM usuarios")
.then(usuarios =>{
    console.log(usuarios)
})
.catch((error)=>{
    console.log(error)
})

/* 
Utilizando nuevamente el método query
Tenemos nuestro productoController que se encarga de las operaciones relacionadas con los productos (listar todos, cargar productos, etc).

Lo que queremos hacer es agregar la lógica para el método mostrar. Este método recibe un id del produto y debe devolver el producto cuyo id conincida en la base de datos. Finalmente usando el método send del objeto response lo debemos devolver.

Para encontrar el producto en nuestra base podemos usar el método query del objeto sequilize y hacer una consulta del tipo: "SELECT * FROM productos where id = " + req.params.id.

Recordá que el resultado lo debes recuperar dentro del méotdo then. Va a ser dentro de este méotdo que vas a ejecutar el código res.send()
*/

const dbConfig = require('../config/database');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('config');

const mostrar = (req, res) => {
	sequelize.query("SELECT * FROM productos WHERE id = " + req.params.id)
	.then((resultado=>{
		res.send(resultado)
	}))
	.catch((e)=>{
		res.send(e)
	})
}

/* 
no hay 2 sin 3: Devuelta el método query
Dentro de peliculaController tenemos el método borrar. Este método espera un id y elimina de la base la película que coincide con el.

Para resolver el ejercicio va a ser necesario ejecutar dentro del método borrar una query del tipo: "DELETE FROM peliculas WHERE id = " + req.params.id

Para finalizar, dentro del método then envía el mensaje "Producto elimiado con éxito" y dentro del méotdo catch el mensaje "Error al eliminar el producto".
*/

const dbConfig = require('../config/database');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('config');

const borrar = (req, res) => {
	sequelize.query("DELETE FROM peliculas WHERE id = " + req.params.id)
	.then(()=>{
		res.send('Producto elimiado con éxito ')
	})
	.catch(()=>{
		res.send("Error al eliminar el producto")
	})
}