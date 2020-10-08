/* 
Buscar series
¡Listemos todas las series!

Tenemos una lista de muchas series almacenadas en la variable series. Tu trabajo será crear una ruta que apunte a "/series" y las devuelva a TODAS.
*/

const express = require('express');
const app = express();

app.get('/series', function(req,res){
    res.send(series)
})

/* 
exerciseProgressIcon
Buscar una serie
Veamos cómo armar nuestra primera ruta parametrizada con Express.

Queremos que crees una ruta que apunte a "/serie" y que la misma, a su vez, reciba un número. Ese número representará el id de la serie que estamos queriendo ver. Por lo tanto, la ruta deberá devolver únicamente la serie que coincida con el id que llegó por parámetro.

Un ejemplo de cómo se vería la ruta sería el siguiente: http://localhost/serie/3

Recordá que la variable series está declarada por detrás y podés disponer de ella con sólo nombrarla.
*/

const express = require('express');
const app = express();

app.get('/serie/:id', function(req, res){
   series.forEach(function(serie){
       if(req.params.id == serie.id){
           res.send(serie)
       }
   })
})
