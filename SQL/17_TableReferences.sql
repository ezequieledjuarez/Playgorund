-- En el salón de Musimundos tenemos un cliente fanático de Willie Dixon, quiere comprar toda la colección de sus temas pero no le interesan los temas que sean de su etapa en el rock. Hagamos una consulta en la base de datos donde te muestre todos los registros que contengan canciones con sus géneros Y que el compositor sea Willie Dixon Y que tengan el género Blues.

-- Ingresá el nombre de la segunda canción que obtuviste.

SELECT c.nombre, g.nombre
FROM canciones c, generos g
WHERE g.nombre = 'Blues' AND c.compositor = 'Willie Dixon';


-- Rta: Pretty Baby