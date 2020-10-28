/*Segundero parte I
Investiguemos el potencal de los timers...

Vamos a construir un pequeño juego con js: Habrá un contador de segundos oculto, y el objetivo será adivinar por qué segundo va ese contador.

Para este ejercicio contamos con una estructura HTML ya definida:

﻿un párrafo con una clase "titulo"
un párrafo sin contenido
un botón para mostrar los segundos
un botón para ocultar los segundos
En el archivo script.js ya capturamos estos elementos por vos. Tu trabajo para empezar será sencillo: agregarle el evento "ckick" al */


window.addEventListener('load', () => {

    let titulo = document.querySelector('.titulo');
    let segundos = document.querySelector('.segundos');
    
    let botonMostrar = document.querySelector('.mostrar-segundos');
    let botonOcultar = document.querySelector('.ocultar-segundos');
    
  botonMostrar.addEventListener('click', function(){})
  });

  /*
  Segundero parte II
Sigamos construyendo nuestro juego de segundos.

En nuestro script.js ya le asignamos el evento "click" al botónMostrar. Ahora bien, ¿qué queremos que suceda cuando el usuario le haga click? Queremos que:

﻿desaparezca el párrafo con clase "titulo"
aparezca el párrafo con clase segundos, mostrando los segundos actuales
No te preocupes... tenemos pensada una lista de tareas con los pasos necesarios.

Dentro del callback del evento "click":

Creá la variable segundero y asignale un intervalo que se dispare cada 0 segundos
En el callback del intervalo, creá la variable fecha y almacená en ella la fecha actual. ¿No recordás cómo hacerlo? ¡Clickeá en la pista!
Al párrafo que tenemos capturado en la variable segundos asignale los segundos actuales. ¿Te acordás cómo escribirle contenido html a una etiqueta desde javascript?
A la variable titulo asignale un display:none para dejar de mostrarlo en el html
A la variable segundos asignale un display:block.
  */ 

 window.addEventListener('load', () => {

    let titulo = document.querySelector('.titulo');
    let segundos = document.querySelector('.segundos');
    
    let botonMostrar = document.querySelector('.mostrar-segundos');
    let botonOcultar = document.querySelector('.ocultar-segundos');
    
    botonMostrar.addEventListener('click', () => {
  
  let segundero = setInterval(function(){
    let fecha = new Date()
    segundos.innerHTML = fecha.getSeconds()
    titulo.style.display = 'none';
        segundos.style.display = 'block';
  }, 0)
    });   
  
  });


/*Segundero parte III
Estamos a unas líneas de código de terminar nuestro pequeño juego...

Para este último paso, no te vamos a dar una lista tan detallada, asi que ¡atención al enunciado!

Queremos que, cuando el usuario haga click sobre el botonOcultar:

﻿Se deje de ver el párrafo que muestra los segundos
Se muestre el párrafo con el título "¿Cuántos segundos van?"
Se limpie el intervalo almacenado en la variable segundero al instante*/

window.addEventListener('load', () => {

    let titulo = document.querySelector('.titulo');
    let segundos = document.querySelector('.segundos');
  
    let botonMostrar = document.querySelector('.mostrar-segundos');
    let botonOcultar = document.querySelector('.ocultar-segundos');
      
      botonMostrar.addEventListener('click', () => {
  
      let segundero = setInterval(function() {
        let fecha = new Date();    
        segundos.innerHTML = fecha.getSeconds();
        titulo.style.display = 'none';
        segundos.style.display = 'block';
      }, 0);
  
  botonOcultar.addEventListener('click', function(){
    segundos.style.display = 'none'
    titulo.innerHTML = "¿Cuántos segundos van?"
  })
  
  clearInterval(segundero,0)
    });   
  
  });