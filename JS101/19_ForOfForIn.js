let bart = {
    madre: "Marge",
    padre: "Homero",
    hobbie: "Skate",
    colorRemera: "Naranja"
}

for(let atr in bart){
    console.log('En la clave: ' + atr + '. Se encuentra el valor: ' + bart[atr])
}

let frase = "Nos encanta hacer la vertical";

for (let letra of frase) {
    console.log(letra);
}