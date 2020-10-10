/* 
Creando un modelo
Nuestra base de datos cuenta con una tabla llamada usuarios que tiene tres columnas: nombre, email y password (todas del tipo string).

El objetivo de este ejercicio es poder crear un modelo asociado a la tabla usuarios.

Para crear nuestro modelo vamos a usar el método define del objeto sequilize. Este método espera dos parámetros: el primero es el nombre de la tabla y el segundo un JSON, cuyas claves son los nombres de las columnas y los valores el tipo de dato.
*/

const Sequelize = require('sequelize');
const sequelize = require('../database'); 

const Usuario = sequelize.define('usuarios',  {
	nombre: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
});



module.exports = Usuario;

/* 

Evitando errores a la hora de crear nuestros modelos
A la hora de configurar nuestros modelos Sequelize hace algunas suposiciones respecto de nuestras tablas. Una de ellas es que espera que todas nuestras tablas tengan las columnas created_at y updated_at.

Si creamos un modelo de una tabla que no tenga alguna de estás columnas podemos encontrarnos con el clásico error "Unknown column 'createdAt' in 'field list'"

Para evitar esto, debemos decirle explícitamente a Sequelize que no vamos a usar ninguna de las columnas created_at o updated_at. Para hacer esto es necesario pasar como tercer parámetro del método define un JSON con esta estructura: {timestamps: false}

En este ejemplo ya tenemos configurado el modelo para la tabla usuarios, pero necesitamos aclaarar que no tenemos las columnas created_at o updated_at. Tu objetivo va a ser agregar la configuración correspondiente.
*/


const Sequelize = require('sequelize');
const sequelize = require('../database'); 

const Usuario = sequelize.define('usuarios',{
    nombre: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
}, {
    timestamps: false
}); //Agregá el tercer parámetro con la configuración

module.exports = Usuario;