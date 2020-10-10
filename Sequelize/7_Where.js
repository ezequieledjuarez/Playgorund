/* 
Trayendo todas las películas
A partir de nuestro modelo Peliculas vamos a recuperar todas las películas de nuestra base de datos y hacer console log del resultado.

Para esto podés usar el método findAll del modelo Peliculas. Recordá que este método es asincrónico.
*/

const Peliculas = require('model/peliculas.js');

Peliculas.findAll()
  .then(peliculas=>{
      console.log(peliculas)
  })


  /* 
  Trayendo pelis por ID
A partir de nuestro modelo Peliculas vamos a recuperar la película con el id 1.

Sequelize nos ofrece el método findByPk que recupera un elemento de la base en función de su primary key. Podemos usar este método a partir de nuestro objeto Peliculas.

Tené en cuante que este método es asincrónico por lo que será neceario trabajar con promises.
  */

 const Peliculas = require('model/peliculas.js');

 Peliculas.findByPk({
     where: {
         id : 1
     }
     }).then(pelicula=>{
         console.log(pelicula)
     })
 