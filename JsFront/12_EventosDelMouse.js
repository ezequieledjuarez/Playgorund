/* 
Mouseover
Tenemos un sitio en desarrollo... por ahora sólo hay un título!

Para este ejercicio queremos que:

﻿Captures el <h1> y lo guardes en la variable titulo
Cuando el usuario pase el mouse por encima de ese h1, se le agrege la clase "titulo", definida en el css

*/

window.addEventListener('load', function() {

    let titulo = document.querySelector('h1')
    
    titulo.addEventListener('mouseover',function(){
        titulo.classList.add('titulo')  
    })
    });


/*
Mouseout
Tenemos una página en construcción, y queremos agregarle un poco de estilo a los links de la barra de navegación, para darle un poco de dinamismo hasta que esté terminada.

Por eso, te pedimos que:

﻿Captures todas las etiquetas <a> y las almacenes en la variable links
﻿Usando addEventListener(), le asignes a cada link el evento "mouseout". 
¿Y qué queremos que pase cada vez que el mouse se aleja del link? Si el link no tiene la clase "dark-mode", asignársela y, si la tiene, quitársela... ¿Qué método de classList nos sirve para resolver eso?
*/ 

let links = document.querySelectorAll('a')

window.addEventListener('load', function() {


  for(let link of links) {
link.addEventListener('mouseout', function(){
  this.classList.toggle('dark-mode')
})
  }

});