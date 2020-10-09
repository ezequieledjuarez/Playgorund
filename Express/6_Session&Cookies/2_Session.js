/* 
Configurando Session
Ahora vamos a trabajar con session. Session nos sirve para guardar información sobre el usuario independientemente de que este cambie de url. Pero antes de poder usar session es necesario hacer una pequeña configuración.

En este ejercicio vas a tener que hacer un require de "express-session" y guardarlo dentro de la constante session.

Luego debes inicializar el middleware de session: session({secret: "frase secreta"})
*/

const express = require('express');
const app = express();
const session = require('express-session')

app.use(session({secret: "frase secreta"}))


/* 
Cambiando idioma
Tenemos un controlador que se va a encargar de guardar en session el idioma de preferencia del usuario. Más tarde podemos usar esta variable de session para mostrar el contenido en el idioma seleccionado.

Para ello, dentro del controlador vamos a guardar el valor del parámetro idioma que recibimos por get dentro del atributo idioma del objeto session. Recorda que para guardar información dentro del objeto session lo debes hacer a partir del request: req.session.

Para recuperar la información del idioma que nos envia el usuario lo hacemos a través del objeto query: req.query.idioma
*/

const express = require('express');
const app = express();

const session = require('express-session');
app.use(session({secret: "frase secreta"}));

const cambiarIdioma = (req, res) => {
 req.query.idioma = session.idioma
	res.redirect('/');
}

/* 
Validando usuarios
En este ejemplo tenemos un controlador. Nosotros debemos hacer que valide que haya seteada una variable en session. Si esta variable se encuentra, ejecutar el código normalmente, pero si no, redireccionar hacia la página de login.

Para esto vamos a crear un if que consulte si existe el atributo admin dentro de session. Si es así, ejecutamos el código normalmente.

Este if que agreguemos tiene que tener un else en donde hagamos la redirección.
*/

const express = require('express');
const app = express();
const session = require('express-session');
app.use(session({secret: "frase secreta"}));
const admin = (req, res,next) => {
    //Agregá un if y un else
    //dentro del if debe ir el código del controlador
    //dentro del else la redirección
    if(req.session.admin){
    next;
    }
    else{
        res.redirect('/login')
    }
        //Código del controlador
}