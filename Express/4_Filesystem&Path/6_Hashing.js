/* 
Probando hash
Vamos a probar el funcionamiento del módulo hash. La idea es, dada una constante que tiene como valor un password, aplicar el método hashSync para encriptarla.

Primero debes declarar la constante bcrypt e inicializarla con el require del módulo bcrypt.

Crear una nueva constante llamada hash y asignarle el resultado de aplicar el método hashSync al password.

Finalmente debemos hacer un console log para mostrar el valor de la constante hash.
*/

const password = '123456';
const bcrypt = require('bcrypt')

const hash = bcrypt.hashSync(password,10)
console.log(hash)

/* 
Validando info hasheada
La idea de usar hash es guardar información sensible sin revelar su contenido orginal. Pero qué pasa en el momento que necesitamos recuperar esa información para, por ejemplo, validar el login de un usuario.

En este ejemplo ya tenemos un cadena de texto previamente encriptada, que la guardamos dentro de la constante hash1. Nuestro objetivo es encriptar la cadena de texto '123456', almacenarla dentro de la constante hash2 y finalmente usar un if para comparar hash1 y hash2 para ver si son iguales.

Dentro del if ejecutar un console log que diga 'los hash son iguales'.
*/

const bcrypt = require('bcrypt');
const hash1 = bcrypt.hashSync('123456', 10);

const hash2 = bcrypt.hashSync('123456',10)

if(hash1 == hash2){
    console.log('los hash son iguales')
}

/* 
usando el método compareSync
Para este ejemplo tenemos dos constante ya definidas: hash y password. Dentro de password se encuentra la cadena de texto que debería conincidir con el password de un usuario y en la constante hash está almacenado el hash de '123456'.

Nuestro objetivo es verificar que la constante password coincida con el valor de hash. Para esto debemos usar el método compareSync del módulo bcrypt y evaluar el resultado dentro de un if. Finalmente, dentro de if vamos a ejecutar un console log que diga 'el password es correcto'.
*/

const bcrypt = require('bcrypt');
const hash = bcrypt.hashSync('123456', 10);
const password = '123456';

if(bcrypt.compareSync("123456",hash)){
    console.log('el password es correcto')
}
