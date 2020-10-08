/* 
Ejercicio: Preparando la constante para trabajar con POST
Ahora vamos a trabajar con POST. Recordá que las URL del tipo POST se suelen usar para guardar información en nuestra base de datos o enviar información sensible. Para recuperar los datos enviados lo hacemos a partir del atributo body del objeto request. Pero antes es necesario indicarle a express que vamos a trabajar con JSON y que la información la envíe en el formato correcto. Para eso es necesario ejecutar dos líneas de código mediante el método use del objeto app.

Ya teniendo creada la constante app usala para agregar la configuración necesaria (urlencoded y json) para trabajar con post.
*/

const express = require('express');
const app = express();

app.use(express.urlencoded({extended:false}))
app.use(express.json())

/* 
Ejercicio: Recuperando información de POST
A diferencia del las rutas del tipo GET en donde recuperar la información enviada a través del método query, en las rutas del tipo POST lo hacemos por medio del atributo body del objeto request.
Vamos a crear una ruta del tipo POST llamada "/ver-body" en donde, a través del método send, mostremos en el navegador el contenido del atributo body.

Primero tenés que crear la constante router y asignarle el objeto Router de express.
Para crear la ruta hacelo usando el método post del objeto router.
*/

const express = require('express');
const router = express.Router()

router.post('/ver-body', (req,res)=>{
res.send(req.body)
})

/* 
Ejercicio: Seteando un objeto con Data de POST
Para este ejercicio tenemos un objeto ya creado que tiene dos atributos, ambos están seteados en null. Nosotros vamos a tener que indicar un valor para cada uno de nuestros atributos según los datos que nos envien por POST. Para ello vamos a crear una ruta del tipo POST que apunte a "/crear/producto". Va a ser a esta ruta que el usuario nos envíe dos datos: nombre y precio del producto. Nosotros vamos recuperar esos datos a partir del atributo body del request y se los vamos a asignar a nuestro objeto producto. Una vez finalizado envía el objeto producto al usuario usando el método send.
*/
const express = require('express');
const router = express.Router();

let producto = {
    nombre: null,
    precio: null
};

router.post('/crear/producto', (req,res)=>{ let producto = {
    nombre  : req.body.nombre,
    precio : req.body.precio
}
res.send(producto)})
