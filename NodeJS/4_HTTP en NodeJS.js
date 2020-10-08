/*
Requerir módulo
Vamos a instanciar un servidor, para eso lo primero que tenemos que hacer es requerir algún que otro módulo.Te pedimos, como primer paso, que crees la variable "http" y almacenes en ella el módulo http.
*/

const http = require('http')

/*
Create server
Queremos que invoques el método necesario para crear nuestro servidor.

Este método recibe un callback. Te pedimos que el mismo imprima por consola la frase "Instanciando un servidor"
*/

const http = require('http')

http.createServer((req, res) =>  {
	console.log("Instanciando un servidor")
})

/*
Listen
En esta ocasión queremos que invoques al método necesario para escuchar en el puerto 3000 en el dominio "localhost".
*/

const http = require('http')

http.createServer((req, res) =>  {
	console.log("Instanciando un servidor")
}).listen(3000, 'localhost')