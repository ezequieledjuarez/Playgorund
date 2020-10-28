/* 
Metodo load
Queremos empezar a escribir código javascript, pero es importante asegurarnos que primero se cargue todo el documento HTML para poder manipular los elementos.

Por eso, te pedimos que, usando addEventListener(), le agregues el evento "load" al objeto window.
*/

window.addEventListener('load', function(){})// escribí tu código aquí

/*
Evento click
Inspeccionemos un poco el código...

Estamos maquetando un sitio y queremos agregarle un evento al link "Contacto" de la barra de navegación. 

En el archivo script.js ya atrapamos ese elemento en la variable linkContacto.


Te pedimos que, usando addEventListener(), le agregues el evento "click" al elemento que atrapamos. Y, para asegurarnos de que estemos haciendo bien las cosas, te pedimos un paso más: queremos que, dentro del callback, hagas un console.log() del elemento sobre el cual se va a ejecutar el evento.
*/ 

window.addEventListener('load', function() {

    let linkContacto = document.querySelector('.contacto');
      
    linkContacto.addEventListener('click', function(){
      console.log(linkContacto)
    })
  
  });