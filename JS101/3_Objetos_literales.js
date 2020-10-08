//Estructura de un objeto literal


var tenista = {
    nombre: 'Roger',
    apellido: 'Federer',
    edad: 38
}

//Métodos de un objeto


var tenista = {
    nombre: 'Roger',
    apellido: 'Federer',
    edad: 38,
    // Método saludar
    saludar: function() {
        return "¡Hola! Mi nombre es Roger";
    }
}

//Trabajando dentro del objeto
var tenista = {
    nombre: 'Roger',
    apellido: 'Federer',
    edad: 38,
    saludar: function() {
        // Accedemos a la propiedad "nombre" de ESTE objeto con la palabra reservada THIS
        return "¡Hola! Mi nombre es " + this.nombre;
    }
}

//Construir un objeto
function Auto(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
};

//Instanciar un objeto
var miAuto = new Auto('Volkswagen', 'Gol');

/*Creando un objeto literal
Vamos a ver como crear nuestro objeto perro:

Declarar una variable llamada perro de tipo objeto literal.
Esa variable debe tener 3 propiedades:

1. nombre, con un valor de tipo String

2. edad, con un valor de tipo Number

3. vacunado, con un valor de tipo Boolean
*/

let perro = {
    nombre : 'Wilson',
    edad  : 2,
    vacunado: true
}