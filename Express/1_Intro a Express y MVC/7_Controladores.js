/* 
exerciseProgressIcon
Primer controller


Comenzás un nuevo día y un nuevo requerimiento llega.
Estas trabajando en el controlador de un carrito de Ecommerce y te piden ahora que al agregar un item el controlador debe devolver el mensaje 'Item Agregado'.

El líder técnico de tu área te indica que para cumplir con este requerimiento debes modificar la función de agregarItem para que reciba los parámetros req y res. Dicho esto el líder técnico se aleja silenciosamente confiando plenamente en tus habilidades.
*/

let carritoController  = {
    agregarItem: function(req,res){
   res.send('Item Agregado')
   }
}

module.exports = carritoController

/* 
Ruteando controladores
Habiendo finalizado un día exitoso y estando apunto de levantarte viene tu project manager y te implora que antes de irte agregues una funcionalidad más "Por favor necesito que se pueda agregar un producto al carrito, porfis porfis".
Resulta que si bien se trabajo en el carritoController, el mismo no fue redireccionado por una ruta, por lo cual desde el navegador, no se puede acceder a la lógica de negocio del carrito.
Te pones a analizar el carritoController y el project manager de paso también te comenta que la ruta del carrito tiene un parámetro dinámico (que debes llamar item que representa el item a agregar (antes de ser project manager era programador también).

Debes analizar el siguiente código y agregar tanto la funcionalidad agregarItem del carritoController como crear la ruta dinámica.
*/

let express = require('express')
let router = express.Router();
let carritoController = require('../controllers/carritoController')

router.get('/:item',carritoController.agregarItem)

module.exports = router