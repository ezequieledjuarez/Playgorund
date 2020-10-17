/* 
exerciseProgressIcon
Modificando estilos
Veamos cómo alterar los estilos de un documento HTML usando javascript.

Para este ejercicio te pedimos que:

﻿Selecciones el <body> y le asignes el color 'lightskyblue' para el fondo
Selecciones el <h2> y lo centres con la propiedad text-align
Selecciones el <h4> y cambies el texto a itálica con la propiedad font-style
*/

window.addEventListener('load', function() {

    document.querySelector("body").style.backgroundColor = 'lightskyblue'
    
    document.querySelector("h2").style.textAlign =  'center'
    
    document.querySelector("h4").style.fontStyle = 'italic'
    });

/* 

¡Modificando estilos a varios elementos a la vez!
Intentemos cambiarle el estilo a muchos elementos a la vez.

¿Te acordás del querySelectorAll()? Este método nos devolvía algo similar a un array...

Para este ejercicio queremos que:

Crees la variable libros
Almacenes en esa variable todos los <li> usando querySelectorAll()
Dentro del ciclo for of que está definido en el archivo, le asignes a cada libro el color 'orange', usando la propiedad color
*/
window.addEventListener('load', function() {

    let libros = document.querySelectorAll("li")    
    for(let libro of libros) {
          libro.style.color = 'orange';
    }
        
    });