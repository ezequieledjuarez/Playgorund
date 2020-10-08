/* 
Parámetros compartidos
Para este ejercicio te pedimos que analizando el HTML completes el código que falta en el controlador para que el mismo pueda enviar al template engine las variables que necesita para poder ejecutar el códio.

Código HTML:

<% for(let i =0; i < items.length; i++) {
   <li>
      <%= items[i] %>
   </li>
<% } %>
*/

let productos = ['Helado 1/4 kg', 'Franui Chocolate Negro', 'Surtido Chocolate 1/2kg'];
       let carritoController = {
         checkout: function (req,res){
             res.render("items",{items:productos});
         }
     }