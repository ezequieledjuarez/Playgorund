/*
Prevent default
Antes de empezar a validar...

Te pedimos que crees la variable formulario y almacenes en ella el formulario del html. Una vez capturado, deberás asignarle el evento "submit" y prevenir el comportamiento por defecto del formulario.

Para este ejercicio, te pedimos que al callback del evento le pases la variable con nombre evento
*/ 

window.addEventListener('load', function() {

    let formulario = document.querySelector('form')
    
    formulario.addEventListener('submit', function(evento){
      evento.preventDefault()
    })
});

/* 
Validando campos
Validemos que los datos que completa el usuario sean correctos.

Para eso te pedimos que:

﻿Captures el input con id nombre en la variable nombre
Si el nombre está vacío, hacé un console.log() con el texto 'Hubo un error en el nombre'
Captures el input con id password en al variable password
Si el password tiene menos de 4 caracteres, hacé un console.log() con el texto 'Hubo un error en el password'
*/

window.addEventListener('load', function() {
    let formulario = document.querySelector('form');
    formulario.addEventListener('submit', function(evento) {
  
      evento.preventDefault();
  
  let nombre = document.querySelector('#nombre')
  if(nombre.value = ''){
    console.log('Hubo un error en el nombre')
  }
  let password= document.querySelector('#password')
  if(password.value.length<4){
    console.log('Hubo un error en el password')
  }
    })
  });
