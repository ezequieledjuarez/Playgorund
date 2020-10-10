-- Ahora que ya tenemos los nombres de los clientes necesitamos que obtengas sólo aquellos que sean de USA.

-- Insertá el nombre del tercer cliente que obtuviste.

SELECT *
FROM clientes c
WHERE c.pais = 'USA';
-- LIMIT 3;

-- Rta : Michelle

-- Vamos a ponernos un poco más finos con la selección. El departamento de canciones te pide un informe de aquellas cuya duración sea entre 200.000 y 300.000 milisegundos. ¿Te animás?

SELECT *
FROM canciones
WHERE milisegundos BETWEEN 200000 AND 300000
-- LIMIT 5;

-- Insertá el nombre de la quinta canción que obtuviste.

-- RTA : 'Inject The Venom'

-- URGENTE! Una banda argentina acaba de sacar un álbum y nos pidio una lista de clientes hispanohablantes para poder divulgar su producto. Te pedimos que obtegas una lista de clientes cuyo país de origen sea Spain o Argentina. ¡Suerte con eso! 

-- Insertá el nombre del primer cliente que hayas obtenido.

SELECT * 
FROM clientes
WHERE pais = 'Argentina' or pais = 'Spain';

-- Rta: Enrique

--  Musimundos desea agregar una lista con todos los géneros a los que pertenecen sus álbums pero ordenados por nombre de manera alfabética.

-- Insertá el nombre del tercer género que hayas obtenido

SELECT *
FROM generos
ORDER BY nombre ASC;

-- Rta: Blues

-- Los gerentes están muy satisfechos con tu trabajo! Pero las tareas todavía no terminan. Ahora necesitan una lista con los solamente los nombres de los clientes de Musimundos, ordenada por país de origen (descendente) y como segundo parámetro por ciudad. ¿Estás listo?

-- Insertá el nombre del sexto cliente que hayas obtenido

SELECT primer_nombre 
FROM clientes
ORDER BY pais, ciudad DESC;

-- Rta : Frank
