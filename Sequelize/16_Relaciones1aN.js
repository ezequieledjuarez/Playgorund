/* 
Genero
Imaginemos que ya tenemos creado un modelo para género y ahora queremos crear una para película.

El objetivo va a ser indicar la relación que hay entre una película y un género en el modelo "Pelicula". Es decir, una película pertenece a (belongsTo) un género.

Para setear esto va a ser necesario, luego de la declaración del modelo película, llamar al método belongsTo pasando como primer parámetro el modelo "Genero". El segundo parámetro del método belongsTo va a ser un JSON con la configuración para el foreignKey y el as (alias del nombre de la relación). En nuestro caso el foreignKey va a ser la columna llamada "genero_id" y vamos a indicar como alias "genero".
*/

const Sequelize = require('sequelize');
const sequelize = require('../database'); 
const Genero = require('model/genero.js');

const Pelicula = sequelize.define('peliculas',{
    titulo: Sequelize.STRING,
    genero_id: Sequelize.INTEGER,
});

Pelicula.belongsTo(Genero,{
    as: "genero",

    foreignKey: "genero_id"
})
module.exports = Pelicula;

/*
Generos
Para este ejercicio nuestra meta va a ser, luego de la definición del modelo de Genero, vincular a este con el modelo Pelicula.

En este caso, un género tiene muchas (has many) películas. Para indicar esto vamos a emplear el método hasMany del modelo Genero.

Para la configuración de la relación el foreignKey va a ser la columna llamada "genero_id" y vamos a indicar como alias "peliculas".
*/ 

const Sequelize = require('sequelize');
const sequelize = require('../database'); 
const Pelicula = require('model/pelicula.js');

const Genero = sequelize.define('generos',{
    nombre: Sequelize.STRING,
});

Genero.hasMany(Pelicula,{
    as: "peliculas",
    foreignKey: "genero_id"
})
module.exports = Genero;

/* 
Buscar Género
En este ejemplo tenemos el modelo Pelicula que tiene creada una relación con el modelo Genero.

Nosotros vamos a traer la película con id 1 usando el método findByPk. Pero también es necesario obtener el género relacionado a la película.

Para lograr esto debemos pasar como segundo parámetro del método findByPk un JSON que tenga el atributo include. Este atributo include, va a ser una array con el listado de todas las relaciones que queremos traer asociadas a la película, en nuestro caso, únicamente la relación "genero".

Finalmente vamos a imprimer dentro del método then un console log que nos nuestre el nombre del género: pelicula.genero.nombre
*/

const Pelicula = require('model/pelicula.js');

Pelicula.findByPk(1,{
    include:['genero']
}).then(pelicula=>{
    console.log(pelicula.genero.nombre)
})

/* 
Creador
Tener creadas relaciones entre objetos nos permite también a la hora de crear un nuevo registro en la base, crear tanto el objeto principal como su relación.

En este caso tenemos un el modelo producto que le pertenece a un usuario (el creador).

Nuestro objetivo va a ser crear un producto cuyo nombre sea "Falcon 9" y crear en el mismo método un usuario asociado a ese producto, que tenga como nombre "Elon" y como apellido "Musk".

Para lograr esto debemos usar el método create del modelo Producto. El primer parámetro de este método va a ser un JSON con las columnas a insertar en la table producto (nombre) y a su vez, un atributo con el nombre de la relación y las columnas a insertar en dicha relación. Para nuestro caso el nombre de la relación es "creador" y las columnas insertar son nombre y apellido.

Por úlitmo, el método create va recibir como segundo parámetro un JSON con el atributo include que va a tener como valor la constante Creador.
*/

const Sequelize = require('sequelize');
const sequelize = require('../database'); 

const Usuario = sequelize.define('usuarios',{
    nombre: Sequelize.STRING,
    apellido: Sequelize.STRING,
});

const Producto = sequelize.define('productos',{
    nombre: Sequelize.STRING,
    usuario_id: Sequelize.INTEGER,
});

const Creador = Producto.belongsTo(Usuario, { as: 'creador' });

Producto.create({
    nombre:{
  title: 'Falcon 9'
  },
   creador: {
    nombre: 'Elon',
   apellido: 'Musk'
     }
   },
   {include: [Creador]})
