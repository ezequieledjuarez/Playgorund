-- El encargado del equipo de UX de Musimundos solicita hacer un pequeño silde con solo tres canciones de nuestra colección. Además pide que sean las tres con mayor duración. ¡Vamos con eso! 



-- Insertá el ID del Album de las tres canciones que obtuviste, en orden, sin espacios y separados por coma. 

SELECT * 
FROM canciones
ORDER BY milisegundos DESC
LIMIT 3;

-- Rta: 227,229,253

-- Tenemos un nuevo comunicado del departamento de UX.

-- En esta ocación necesitan hacer una paginación de canciones. La primer página ya está resuelta, pero para la segunda debés saltear cinco canciones y traer las próximas cinco. Estas deben estar ordenados alfabéticamente por nombre. 



--Insertá el compositor de la quinta canción que obtuviste.

SELECT * 
FROM canciones
ORDER BY nombre ASC
LIMIT 5
OFFSET 5;

-- ??
-- Rta : Santana