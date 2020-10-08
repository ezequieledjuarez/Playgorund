function agregarHttp(texto){
    let agregar = 'http://'
    return agregar.concat(texto)
}

function procesar(sitios,funcion){;
    let newSitios=[];
    for(let i = 0; i<sitios.length;i++){
        newSitios = funcion(sitios[i])
    }
    return newSitios
}

let urls = ['www.google.com', 'www.pescar.com', 'www.udemy.com', 'www.9gag.com']

console.log(procesar((["www.google.com","www.yahoo.com"]),agregarHttp))

//Probar console.log(persona[0].nombre.includes("Eric"))
// Metodos de array dentro de un array de objetos

