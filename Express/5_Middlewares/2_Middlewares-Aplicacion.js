/* 
Agregando el middleware "express.json()"
Los middleware nos dan la posibilidad de ejecuar código antes de que se ejecute el código para una ruta en particular. Esto nos permite, por ejemplo, analizar y estructurar el request para luego pasarlo a las rutas.

Un ejemplo de esto es el middleware json de express: "express.json()". Este middleware inyecta los parámetros enviados dentro del objeto body y los convierte en un json. Es decir, que sin este middleware no tendríamos acceso en nuestras rutas al body de request.

En este ejemplo tenemos una ruta que recibe un post y hace un console log de req.body, pero en este ejemplo todavía no declaramos el middleware.

El objetivo es agregar el middleware "express.json()", a través del método use de app, para permitir que la ruta pueda hacer uso del body del request.
*/

const express = require('express');
const app = express();

app.use(express.json())

const router = express.Router();
router.post('/crear-usuario', (req, res) => {
	console.log(req.body);

	res.send('El usuario se creó con éxito');
});

app.use(router);

app.listen(3000);

/* 
Sitio en mantenimiento
Aprovechando la capacidad de los middleware vamos a crear un código al que podamos setearle si el sitio está en mantenimiento y muestre una vista personalizada informando esto al usuario, sin importar a que ruta del sitio esté ingresando.

En este ejemplo tenemos creada una variable llamada "enMantenimiento" seteada por defecto con el valor false.

Nosotros vamos a tener que, usando el método use de app, crear una función que evalue el valor de variable "enMantenimiento". Si la variable tiene el valor false debemos ejecutar la función next del middleware para que el flujo de la aplicación continue normalmente. Pero si la variable tiene el valor true vamos a devolver la vista 'en-mantenimiento', usando el objeto response para esto.
*/

const express = require('express');
const app = express();
let enMantenimiento = false;

app.use(function(req,res,next){
    if(!enMantenimiento){
        next()
    }else{
        res.render('en-mantenimiento')
    }
})

/* 
Agregando la propiedad usuario
En el siguiente ejemplo tenemos definido un usuario dentro de la constante "usuario". Usando un middleware tenemos que agregar en el objeto request la propidad usuario con el valor de nuestra constante. De esta menera, todas las rutas deberían poder recuperar a valor de usuario mediante el objeto request. Ej.: req.usario.

Para lograr esto vamos a llamar al método use de app y pasarle una función. Esta función debe recibir tres argumentos: req, res y next. Nosotros vamos a agrear al objeto req un nuevo parámetro llamado usuario y pasarle como valor la constante "usuario".

Finalmente debemos ejecutar el callback next.
*/

const express = _require('express');
const app = express();
const usuario = {
    nombre: 'Máximo',
    apellido: 'Cozzetti'
};

app.use(function(req,res,next){
    req.usuario= usuario
    next()
})

