/*
IndexOf
Veamos cómo encontrar elementos puntuales dentro de un array.
Para este ejercicio contamos con el array alumnos. Queremos saber dónde están guardados los nombres "Juan" y ""Francisco", y que utilices un método de array para averiguarlo.
Para eso te pedimos que declares las variables indiceJuan e indiceFrancisco y almacenes en ellas el indice correspondiente de cada uno.
*/

let alumnos = ["Juan", "Pepe", "Jorge", "Francisco"]

let indiceJuan = alumnos.indexOf('Juan')
let indiceFrancisco = alumnos.indexOf('Francisco')

/*
Join
Si lo juntamos, todo tiene sentido.
Tenemos un array con palabras sueltas que, juntas, forman una gran frase.
Queremos que, utilizando un método de array sobre la arrayFrase , lo conviertas en una oración entera, y almacenes ese String en una variable llamada fraseNueva.
Ejemplo:
console.log(fraseNueva); // "No he fracasado, simplemente me he topado con diez mil soluciones equivocadas"
*/

let arrayFrase = [
    "No",
    "he",
    "fracasado,",
    "simplemente",
    "me",
    "he",
    "topado",
    "con",
    "diez",
    "mil",
    "soluciones",
    "equivocadas"
  ];
  
  let fraseNueva = arrayFrase.join(' ')
  console.log(fraseNueva)

  /*
  Pop
¡Sí! ¡Alexis se egresó del terciario!
Para este ejercicio contamos con el array estudiantes, en donde, en cada índice, almacena un objeto con las propiedades nombre, promedio y curso.
Queremos sacar a Alexis, que acaba de egresar y sabemos que está último en ese array.
Para eso te pedimos que, utilizando un método de array, guardes los datos de Alexis en una variable nueva llamada alumnoEgresado.
  */

/*
 let estudiantes = [
    {
      nombre: "Alvaro",
      promedio: 9,
      curso: "Android"
    },
    {
      nombre: "Daniel",
      promedio: 6,
      curso: "Full Stack"
    },
    {
      nombre: "Alexis",
      promedio: 3,
      curso: "iOS"
    }
  ];
  
  let alumnoEgresado = estudiantes[2]
  
  estudiantes.pop()
*/
  /*
  push
Se inscribieron dos estudiantes nuevos y queremos agregarlos al final del array estudiantes.
Tu trabajo será agregar de a un alumno por vez, utilizando algún método de array.
Los valores de cada uno son:

nombre: Juan

promedio: 5

curso: iOS

------------------
nombre: Miguel

promedio: 2

curso: Android
  */

 let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    },
  ]
estudiantes.push({nombre:'Juan', promedio:5, curso:'IOS'})
estudiantes.push({nombre:'Miguel', promedio:2, curso:'Android'})

/*
shift
Se dio de baja un alumno.
Tenemos que dar de baja al primer estudiante y queremos sacarlo del array estudiantes. Para eso te pedimos que crees una variable llamada alumnoDeBaja y que, utilizando un método de array, almacenes en ella a ese primer estudiante.
*/

/*let estudiantes = [
    {
       nombre: 'Alvaro',
       promedio : 9,
       curso : 'Android',
     },
      {
        nombre: 'Daniel',
        promedio : 6,
        curso : 'Full Stack',
      },
      {
        nombre: 'Alexis',
        promedio : 3,
        curso : 'iOS',
      },
    ]

    let alumnoDeBaja = estudiantes[0]

    estudiantes.shift()

    /*
    unshift
Se reintegraron alumnos.
Tenés la tarea de reintegrar a dos estudiantes que se habían registrado al principio de todo, se dieron de baja, ¡pero volvieron! Y, para que no pierdan su lugar privilegiado, queremos que, utilizando un método de array, agregues al inicio del mismo a cada estudiante (de a uno a la vez).

Los datos que tenés que agregar de cada uno son:



nombre: "Mariana",

promedio: 9,

curso: "Full Stack"

-------------------------

nombre: "Francisco",

promedio: 2,

curso: "Android"


    */
/*
   let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    }
  ]
  estudiantes.unshift({nombre:'Mariana', promedio:9, curso:'Full Stack'})
  estudiantes.unshift({nombre:'Francisco', promedio:2, curso:'Android'})
  */