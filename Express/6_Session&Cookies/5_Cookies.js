/* 
Setear cookie
Las cookies son sumamente sencillas de usar. Vamos a guardar en una cookie el atributo "ultimoAcceso" con el valor del date actual. La idea de esto es porder saber, cuando el usuario vuelva a entrar en nuestra web, cuanto tiempo paso desde la última vez.

Pero eso, dentro del controlador vamos a usar el método cookie del objeto reponse. Este método espera como primer parámetro el nombre de la cookie, en este caso "ultimoAcceso". El segundo parámetro va a ser la fecha de acceso, esto lo podemos obtener haciendo new Date().
*/

var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

const index = (req, res) => {
	res.cookie('ultimoAcceso', new Date())

	//Código del controlador
}

/*
Preferencias del usuario
Nuestro sitio se puede mostrar con distintos estilos. El estilo por defecto lo llamamos "default", pero le damos la posiblidad al usuario que pueda cambiarlo. No sólo eso, sino que además guardamos su elección en una cookie llamada estilo.

En este controlador estamos renderizando una vista. Nuestro objetivo es consultar si hay algún valor guardado para el atributo estilo dentro del objeto cookie. Si es así, vamos a pasar a la vista el estilo guardado, si no, pasamos "default".

Para lograr esto agregá un if para preguntar si existe el atributo estilo dentro de cookie. Si es así, dentro del if setea una variable llamada estilo con el valor guardado en la cookie. Caso contrario, en el else, setea la variable estilo con el valor "default".
*/ 

var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

const index = (req, res) => {
	let estilo ;

if(req.cookie.estilo){
	estilo = req.cookie.estilo
	res.render('/', {estilo: estilo});
}
else{
	estilo = "default"
	res.render('/',{estilo:estilo})
}	//Código del controlador
}

/* 
Recomendados
Previamente almacenamos en el navegador de usuario una cookie llamada "preferencias". Ahora, desde este controlador, queremos mostrar un listado de productos recomendados en función de las preferencias del usuario.

Para lograr este objetivo vamos a recuperar el valor de la cookie "preferencias" y almacenarla en una constante llamada "preferencias".

A partir del valor recuperado vamos a traer todos los productos del listado de listadoProductos cuya key conincida con este valor. Almacenamos los productos en una constante llamada "productos".

Finalmente pasamos al método render la constante productos.
*/

var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

const listadoProductos = {
	vestidos: [
		'vestido broderie',
		'vestido towel',
		'vestido voile',
	],
	remeras: [
		'remera alforzas',
		'remera bordada',
		'musculosa',
	]
}

const recomendados = (req, res) => {
const preferencias = req.cookie.preferencias

const productos = listadoProductos[preferencias]

res.render('/recomendados', {productos:productos})
}