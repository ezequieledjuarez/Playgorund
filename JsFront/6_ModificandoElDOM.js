/* 
Sumando Texto a un elemento con contenido
El subtítulo del <h3> nos quedó corto y queremos agregar un pequeño texto al final del mismo usando Javascript.

Para eso te pedimos que, usando el método innerText, selecciones la etiqueta <h3> y le sumes el texto "usando código" al final.

No olvides agregar el espacio correspondiente para que no queden los textos encimados. Deberás ver en el navegador el siguiente resultado:



Javascript Front

Agregando contenido usando código
*/

window.addEventListener('load', function() {

    document.querySelector("h3").innerText += " usando código"
    });

/*  
Agregando etiquetas
¡Agreguemos etiquetas!


Para este ejercicio queremos que:

selecciones la etiqueta <body> usando querySelector()
le agregues la siguiente etiqueta tal cual está: <mark>Javascript ROCKS</mark>


Pero OJO: el <body> ya tiene las etiquetas <h1> y <h3> definidas y no queremos que se borren.


*/
window.addEventListener('load', function() {

    document.querySelector("body").innerHTML += "<mark>Javascript ROCKS</mark>" 
    });