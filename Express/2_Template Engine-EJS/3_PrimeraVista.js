/* 
Renderizando el login
Para este ejercicio te pedimos que completes el controlador del usuario haciendo que al invocar el loginUser el mismo renderice con EJS la vista login.
*/

let userController = {
    loginUser: function (req,res){
        res.render('login');
    }
}