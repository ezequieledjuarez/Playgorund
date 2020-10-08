//Estructura de arrow function
// Función convencional

function sumar(n1, n2) {
    return n1 + n2
}

// Arrow function

let sumar = (n1, n2) => { n1 + n2 }

/*

Convertir a arrow function
Empecemos por practicar la sintaxis de una arrow function que no recibe parámetros.

Para este ejercicio te vamos a dar tres funciones ya definidas.Tu trabajo será cambiarle la sintaxis y volver a escribirlas para que sean funciones de tipo arrow.
*/

let dameCinco = () => {
    return [1,2,3,4,5]
  }
  
  
  
  let multiplicarPorDos = () =>{
    return 123*2
  }
  
  
  
  let mostrarNombre = () =>{
    return "Mi nombre es Hernán"
  }
/*
Arrow function con un parámetro
Ahora tu trabajo será refactorizar la función saludar() que recibe un parámetro, es decir, escribirla con la sintaxis necesaria para convertirla en una arrow function.
*/  

let saludar = nombre =>
     'Hola, ' + nombre + '!'

/*
Ahora probemos con más de uno
Y sí, sólo nos falta practicar la sintaxis de una arrow function que reciba más de un parámetro.Te dejamos la función saludar(), que esta vez recibe un nombre y un apellido, para que la conviertas en una función de tipo flecha
*/

let saludar =(nombre, apellido)=> {
    return 'Hola, ' + nombre + ' ' +  apellido + '!';
}