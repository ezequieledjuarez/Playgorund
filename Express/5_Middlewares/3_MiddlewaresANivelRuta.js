/* 
Agregando middleware en la ruta "subir-archivo"
A diferencia de los middleware de aplicación que se ejecutan para todas las rutas, los middleware de ruta permiten aplicar un middleware en una o varias rutas seleccionadas.

Un ejemplo de esto es el middleware de multer que se agrega a sólo a las rutas que se van a encargar de subir archivos. (Recordemos que multer es un paquete de node que permite la carga de archivos en el servidor.)

Para este ejemplo ya tenemos lista la configuración de multer, pero nos falta agregar el middleware en la ruta "subir-archivo".

Para ello vamos a tener que pasar como segundo parámetro ruta subir archivo el middleware upload.any().
*/

const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
});
 
const upload = multer({ storage: storage });

router.post('/subir-archivo', upload.any(),fileController.upload); //Agregar el middleware de multer

/* 
Contando visitas
Imaginemos que tenemos un controlador llamado "estadisticasController" que tiene un método "contarVisita". Este médoto recibe un request y suma, en nuestra base de datos, una nueva visita a la url del request.

Ahora bien, nos gustaría poder contar las visitas a nuestro sitio, pero no de todas las url. Por ejemplo no queremos contar visitas a las rutas que se acceden por post y a algunas rutas rutas get, como login y panel de usuario, es probable que tampoco.

Nuestro objetivo va a ser, crear una función llamada visitasMiddleware que reciba como parámetros req, res y next. Dentro de está función vamos a ejecutar el método contarVisita del controlador estadisticasController, y vamos a pasarle el objeto request como parámetro del método: estadisticasController.contarVisita(req). Al final de nuestra función vamos a ejecutar el callback next()

Finalmente vamos a agregar nuestra función "visitasMiddleware" como segundo parámetro de la ruta '/home' que ya se encuentra definida.
*/

const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const estadisticasController = require('../controllers/estadisticasController');

const visitasMiddleware = function(req,res,next){
contarVisita = estadisticasController.contarVisita(req);

next();
}
router.get('/home', visitasMiddleware,homeController.index); //Agregá la función visitasMiddleware como segundo parámetro de tu ruta

/* 
Redirigiendo a la HOME
Algunas rutas de nuestro sitio dejaron de usarse y ya no tenemos contenido para mostrar. Nos gustaría hacer que cuando un usuario trate de entrar a alguna de estas rutas sea redirigido al home.

Para ello vamos a crear una función llamada "redirigir", que como va a servirnos de middleware, debe recibir tres parámetros: req, res y next.

Dentro de nuestro función vamos a llamar al método redirect del objeto response y vamos a hacer una redicción hacia la url '/'. Para este caso particular no es necesario llamar al callback next dado que la idea de este redirect es cortar la ejecución de los posibles subsiguientes middlewares.

Finalmente simplemente nos queda agregar la función "redirigir" como segundo parámetro de la ruta '/ruta-en-desuso'.
*/

const express = require('express');
const router = express.Router();
const OldController = require('../controllers/OldController');

function redirigir(req,res,next){ res.redirect('/')
}
router.get('/ruta-en-desuso', redirigir,OldController.index); //Agregá la función redirigir como segundo parámetro de tu ruta