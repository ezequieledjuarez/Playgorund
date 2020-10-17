/* 
Manipulando elementos con JS
Tenemos un sitio HTML definido y queremos empezar a manipular sus elementos.

Para este ejercicio te pedimos que:

crees la variable tituloPelicula
almacenes en esa variable el elemento h2 del documento HTML.
Deberás usar el método del objeto documnet que te permita seleccionar la etiqueta <h2> del documento.


*/

window.addEventListener('load', function() {

    let tituloPelicula = document.querySelector("h2")
    });

/* 
Manipulando elementos con JS II
Tenemos un sitio HTML definido y queremos empezar a manipular sus elementos.

Para este ejercicio te pedimos que:

﻿crees la variable parrafos
almacenes en esa variable todos los párrafos del documento HTML.
Deberás usar el método del objeto documnet que te permita seleccionar todas las etiquetas <p> del documento.
*/
window.addEventListener('load', function() {

let parrafos =  document.querySelectorAll("p")
});


/* 
Manipulando elementos por ID
Tenemos un sitio HTML definido y queremos empezar a manipular sus elementos.

Para este ejercicio te pedimos que:

﻿crees la variable pulpFiction
almacenes en esa variable el elemento <h3> con id "pulp-fiction".


Pero ojo, no queremos que utilices el método querySelector()...
*/
window.addEventListener('load', function() {

let pulpFiction = document.getElementById("pulp-fiction")
});

/* 
Manipulando elementos por nombre de clase
Tenemos un sitio HTML definido y queremos empezar a manipular sus elementos.

Para este ejercicio te pedimos que:

﻿crees la variable barraDeNavegacion
almacenes en esa variable el elemento <ul> con clase "nav-bar".


Pero ojo, no queremos que utilices el método querySelector()...
*/
window.addEventListener('load', function() {

    let barraDeNavegacion = document.getElementByClassName("nav-bar")
    });