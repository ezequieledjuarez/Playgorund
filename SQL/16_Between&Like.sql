-- Utilizemos el nuevo operador LIKE.

--Musimundos te pide un listado de todas las canciones cuyos compositores empiecen con "A". ¿Te parece fácil? 

--Insertá el nombre de la cuarta canción que obtuviste.

--Tip: No te preocupes por las mayúsculas y minúsculas ya que el LIKE no hace distinción entre las mismas.

SELECT * 
FROM canciones
WHERE compositor LIKE 'a%';


-- Rta: Inject The Venom

--Ahora Musimundos sube la apuesta y necesita un listado de géneros que contengan en alguna parte del nombre la sigla "ro".

--Insertá el nombre del último género que obtuviste.

--Tip: No te preocupes por las mayúsculas y minúsculas ya que el LIKE no hace distinción entre las mismas.

SELECT * 
FROM generos
WHERE nombre LIKE '%ro%';

-- Rta: Electronica/Dance

-- Ayer hablé con tu gerente y está chocho con el trabajo que venís realizando. ¡Felicitaciones!

--Lo único que me pidió antes de despedirnos es que te comunicara una última tarea. En Musimundos necestan hacer un chequeo de canciones y solicitan una lista de las que tengan un id entre 10 y 20. ¿Podrías encargarte?

--Ingresá el nombre de la segunda canción que hayas obtenido

SELECT *
FROM canciones
WHERE id BETWEEN 10 and 20;

-- Rta: C.O.D
