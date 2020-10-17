/* 
Agregando clases a un elemento
Para este ejercicio contamos con un pequeño sitio y una clase de css definida, pero, todavía no se le asignó a ningún elemento.


Por eso te pedimos que, usando javascript, selecciones al <div> y le asignes la clase 'container' que ya se encuentra definida en el archivo styles.css.
*/

window.addEventListener('load', function() {

    document.querySelector("div").classList.add("container")
    });


/*
Sacando clases a un elemento
Tenemos un <h1> pero no nos gusta cómo se ve...

Queremos que, usando javascript, selecciones al <h1> y le saques la clase 'titulo'.

Sugerencia: enviá la respuesta sin resolver, así podes visualizar la diferencia una vez que resuelvas el ejercicio.
*/  
window.addEventListener('load', function() {

document.querySelector("h1").classList.remove("titulo")
});

/* 
Alternando clase
A ciegas...

Tenemos un sitio con algunos elementos y clases asignadas pero, no tenemos acceso al HTML, por lo tanto no podemos ver qué clases tiene cada elemento.

En este caso queremos trabajar con la clase titulo-tuneado . Para eso te pedimos que, usando javascript, preguntes si el <h1> tiene esa clase asignada para que, si no la tiene se la asigne y si la tiene, se la quite.
*/
window.addEventListener('load', function() {

    document.querySelector("h1").classList.toggle("titulo-tuneado")
    });