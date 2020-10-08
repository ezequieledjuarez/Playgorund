function limpiarEspacios(...palabras){
    for(let i = 0; i < palabras.length; i++){
        palabras[i] = palabras[i].trim()
    }
    return palabras
}

let texto = limpiarEspacios('Este    ', '   es', 'un ', 'ejemplo')
let texto2 = limpiarEspacios('Hola     ', '            mundo')

console.log(texto)
console.log(texto2);

let pelisAccion = ['Rambo', 'Terminator', 'Depredador']
let pelisCF = ['Alien', 'El dia que la Tierra se detuvo', 'E.T']

let todasLasPelis = [...pelisAccion, ...pelisCF]

console.log(todasLasPelis);

let generoAccion = {
    nombreGenero : 'Accion',
    ranking : 4
}

let rambo = {
    nombre : 'Rambo',
    hastaLa : 4,
    duracion : 134,
    ...generoAccion
}

let terminator = {
    nombre : 'Terminator',
    hastaLa : 6,
    duracion : 214,
    ...generoAccion
}

let depredador = {
    nombre : 'Depredador',
    hastaLa : 2,
    duracion :   109,
    ...generoAccion
}


console.log(depredador);
console.log(terminator);
console.log(rambo);



