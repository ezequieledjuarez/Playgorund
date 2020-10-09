/* 
Preparando formularios para permitir la carga de archivos
A la hora de cargar archivos mediante el formulario no sólo hace falta configurar nuestro código en node sino que también debemos agregar una configuración extra en la etiqueta form.

Dado el siguiente formulario agregá el atributo enctype con el valor correspondiente para permitir el envío de archivos.
*/

/* 
<html>
  <head>
    <title>Carga de imágenes</title>
  </head>
  <body>
    <form action="upload" method="POST" enctype = "multipart/form-data">

    </form>
  </body>
</html>
*/

/* 
Usando Multer para cargar archivos
Desde node, para subir archivos, pedemos usar herramientas como multer. Simplemente hace falta agregarlo al archivo de rutas en donde se encuentre nuestra ruta o rutas que se van a encargar de subir archivos (imágenes, documentos, etc).

En este ejemplo, vamos a agregar multer al archivo de rutas user.js para permitir que durante el registro los usuarios puedan adjuntar una imagen.

Para ello será neceario, requerir el módulo multer, crear el storage, inicializar la variable upload y agregar a la ruta que ya tenemos definida la expresión upload.any() como segundo parámetro.

Para ver la configuración que necesita multer para funcionar podés consultar la documentación oficial: https://www.npmjs.com/package/multer#diskstorage.
*/

const express = require('express');
const router = express.Router();
const multer= require('multer')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
 
var upload = multer({ storage: storage })

router.post('/register',  upload.any(),usersController.save);