/* 
Validando campos en la registración
Ya tenemos nuestra ruta de registro. Lo que necesitamos hacer ahora es agregar una validación para que el campo email sea del tipo mail y la contraseña tenga por lo menos 6 caracteres.

Para lograrlo vamos a requerir el módulo express-validator y usando el operador de destructuración vamos inicializar tres constantes: check, validationResult y body.

En nuestra ruta vamos a agregar como segundo parámetro un array. El array va a tener sólo dos posiciones, una para validar el input "email" y otra para validar el input "password".

En cada posición del array vamos a usar la función check pasando como parámetro el input a validar y vamos a concatenar a la ejecución de está función una segunda función que va a ser la regla que queremos que cumpla nuestro input, por ejemplo isEmail.
*/

const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');
const{check, validationResult, body} = require('express-validator')

router.post('/registro', [
    check('email').isEmail(),
    check('password').isLength({min:6})
], UsuarioController.registro);

/* 
Validando que la url sea segura
Tenemos un formulario de carga en donde los usuario pueden subir sus sitios web favoritos para que otros usuarios los vean. En este formulario recibimos el input url con la dirección del sitio. Nosotros queremos validar que la url que nos llega sea segura, es decir https. Para lograr esto vamos a crear nuestra regla personalizada.

Usando la función body validá el input url. Concatená a la ejecución de body el método custom para hacer tu validación.

El método custom recibe una función con un parámetro value, ese parámetro va a ser el valor que nos llega del input url.

Usando indexOf validá que la url sea del tipo https. Recordá que la función que recibe el método custom debe devolver true o false.

Tip: para saber si el input url tiene es del tipo https podés hacer value.indexOf('https') !== -1
*/

const express = require('express');
const router = express.Router();
const favoritosController = require('../controllers/favoritosController');
const {validationResult, body } = require('express-validator');

router.post('/favoritos',  [
   body('url')
    .custom((value)=>{
       return value.indexOf('https') !==-1
    })
],favoritosController.guardar);

/*
Validando que no haya errores
En este ejemplo tenemos un controller con un método login. Nosotros debemos reformular este método agregando un if para chequear que no haya errores de validación. En caso de que haya errores debemos devolver la vista login con los errores.

Para esto vamos a crear una constante llamada errores y la vamos a asignar la ejecución de la función validationResult.

Luego en un if vamos a llamar al método isEmpty del objeto errores.

En caso que el método nos devuelva false (no está vacio porque contiene errores), vamos a devolver la vista login con los errores.

Para devolver la vista de login debes usar el método render del objeto response. Recordá que para recuperar los errores debes usar el método array del objeto errores.
*/

const express = require('express');
const router = express.Router();
const { validationResult, body } = require('express-validator');

const userController = {
  login: (req, res) => {
    const errores = validationResult(req);

    if(errores.isEmpty()){
      res.render('login')
    }else{
      res.render('login', {errores: errores.array()})
    }

    if (req.body.name == 'admin' && req.body.pass == 123) {
    	res.redirect('/dashboard');
    }
  }  
}