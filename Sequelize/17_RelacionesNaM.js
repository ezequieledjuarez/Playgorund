/* 
Peliculas Actor
En MySQL a la hora de indicar relaciones de muchos a muchos es necesario crear una tabla pivot. Algo similar sucede con sequelize. Para poder relacionar dos modelos a través de la relación belongsToMany primero debemos crear un modelo "pivot".

En este ejemplo queremos relacionar los modelos pelicula y actor. Para ello vamos a crear el modelo PeliculaActor. Como en la creación de todo modelo el primer parámetro es el nombre de la tabla, en este caso: "pelicula_actor". Como segundo parámetro pasamos un JSON las columnas y sus propiedades. Al ser la representación de una tabla pivot va a tener dos columnas "pelicula_id" y "actor_id".

Además de indicar que cada una de estas columnas es un entero debemos setear el parámetro references indicando los atributos model y key. Model va ser con que modelo se relaciona y key a que columna apunta.

Para la columna pelicula_id el model será "Pelicula" y la key "id". Mientras que para la columna actor_id el model será "Actor" y la key "id".

Manos a la obra.
*/

const Sequelize = require('sequelize');
const sequelize = require('../database'); 

const PeliculaActor = sequelize.define('pelicula_actor',{
    pelicula_id: {
    	type: Sequelize.INTEGER,
    	references: {
    		model: 'Pelicula',
    		key: 'id'
    	}
    },
    actor_id: {
    	type: Sequelize.INTEGER,
    	references: {
    		model: 'Actor',
    		key: 'id'
    	}
    }
});


module.exports = PeliculaActor;

/* 
Relaciones Pivot
Luego de creado el modelo pivot debemos hacer una relación del tipo belongsTo con cada uno de los modelos que se relaciones.

En nuestro ejemplo necesitaríamos agregar un belongsTo con Pelicula y otro con Actor. Como en todos los belongsTo el primer parámetro va a ser el nombre del modelo y el segundo un JSON indicando el foreignKey (no es necesario setear el "as").
*/

const Sequelize = require('sequelize');
const sequelize = require('../database'); 
const Actor = require('model/actor.js');
const Pelicula = require('model/pelicula.js');

const PeliculaActor = sequelize.define('pelicula_actor',{
    pelicula_id: {
    	type: Sequelize.INTEGER,
    	references: {
    		model: 'Pelicula',
    		key: 'id'
    	}
    },
    actor_id: {
    	type: Sequelize.INTEGER,
    	references: {
    		model: 'Actor',
    		key: 'id'
    	}
    }
});

PeliculaActor.belongsTo(Pelicula,{
	foreignKey: "pelicula_id"
})

PeliculaActor.belongsTo(Actor,{
	foreignKey:"actor_id"
})
module.exports = PeliculaActor;

/* 
Peliculas Actor toma 3
El objetivo de este ejercicio es relacionar el modelo Pelicula con Actor a través de una relación de muchos a muchos.

Para indicar esto vamos a emplear el método belongsToMany del modelo Pelicula.

Para la configuración de la relación el foreignKey va a ser la columna llamada "pelicula_id", el alias "actores" y el through va a ser el modelo "PeliculaActor".
*/

const Sequelize = require('sequelize');
const sequelize = require('../database'); 
const Actor = require('model/actor.js');

const Pelicula = sequelize.define('peliculas',{
  titulo: Sequelize.STRING,
  genero_id: Sequelize.INTEGER,
});

    Pelicula.belongsToMany(Actor,{
      as: "actores",
      through:"PeliculaActor",
      foreignKey:"pelicula_id"
    })

module.exports = Pelicula;

/* 
Buscando Actores
En este ejemplo tenemos el modelo Pelicula que tiene una relación de muchos a muchos con Actor.

Nosotros queremos traer toda la información de la película con id junto los actores que tiene asociados.

Para lograr esto debemos pasar como segundo parámetro del método findByPk un JSON que tenga el atributo include. Este atributo include, va a ser una array con el listado de todas las relaciones que queremos traer asociadas a la película, en nuestro caso, únicamente la relación "actores".

Finalmente vamos a imprimer dentro del método then un console log que nos nuestre los actores de la pelicula: pelicula.actores.

Dado que la relación es de muchos a muchos el atributo actores será del tipo array.
*/

const Pelicula = require('model/pelicula.js');

Pelicula.findByPk(1, {include:["actores"]}).then(pelicula=> 
console.log(pelicula.actores))

/*

Agregando Actores
Al crear la relación del tipo belongsToMany entre Pelicula y Actor sequelize nos provee los métodos setActores, que nos permite vincular una películas con uno o varios actores.

En este ejemplo ya contamos con una instancia de pelicula. Lo que vamos a hacer en a la instancia de pelicula ejecutar el método setActores pasando como parámetro un array con los ids de los actores que queremos vincular. Esto va a generar automáticamente los registros en la tabla pivot.

Vincular los actores 3, 5 y 8
*/ 

const Pelicula = require('model/pelicula.js');

Pelicula.findByPk(1).then(pelicula => {
	pelicula.setActores([3,5,8])
});