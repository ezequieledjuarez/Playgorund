/*Importar módulos
Vamos a practicar la importación de los módulos, ya que es algo que usaremos permanentemente.

Nuestro objetivo será crear 3 variables: "moduloNativo", "moduloInstalado" y "moduloPropio", en donde cada una almacenará un módulo distinto. La primera deberá requerir el módulo http, la segunda el módulo axios y la tercera un módulo local exportado desde el archivo miFuncion.js. Este archivo se encuentra en la misma carpeta que el archivo index.js.*/

const moduloNativo = require('http')
const moduloInstalado = require('axios')
const moduloPropio = require('./miFuncion')

/*Exportar módulos
Tenemos datos del perro Poochie almacenados en distintas variables...

Nuestro trabajo será crear la variable perro, almacenar en ella todos estos datos y, luego, exportarlos.*/

let perro ={
    nombre : 'Poochie',
    edad : 36,
    vive : true
}

module.exports = perro

/*
Requerir objeto
Creamos un nuevo archivo y queremos acceder a los datos que exporta el archivo perro.js que se encuentra en el mismo directorio. Este expone un objeto literal que tiene los atributos nombre y edad.

Nuestro trabajo será crear la variable "perro" y requerir el módulo perro. Luego, debemos hacer un console.log() para mostrar los datos usando la siguiente frase: "El perro se llama _____ y tiene ___ años".
*/

const perro = require('./perro')

console.log('El perro se llama ' + perro.nombre + ' y tiene ' +  perro.edad + ' años')