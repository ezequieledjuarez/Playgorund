--  Es la semana del rock a nivel mundial y nuestro gerente de Musimundos nos pide crear banners con canciones del genero Rock. Hacé una consulta a nuestra base de datos que nos devuelva los nombres de las canciones que tengan genero rock.

-- Ingresá de la cancion que aparece en el cuarto lugar.


SELECT *
FROM canciones c
INNER JOIN 
generos g
ON c.id_genero = g.id;

-- Rta: 'Restless and Wild'

-- En el salon Musimundos tenes un cliente fanático de Deep Purple, este quiere comprar todos los albums que tengan como Artista a Deep Purple. hacé una consulta a nuestra base de datos que nos traiga el titulo del album y el autor para saber si lo que le estamos vendiendo es correcto.

-- Ingresá el título del álbum en la posición número 10.

SELECT alb.titulo, art.nombre
FROM albumes alb
INNER JOIN 
artistas art
ON alb.id_artista = art.id
WHERE art.nombre = 'Deep Purple';

-- Rta: Stormbringer


-- En el departamento de desarrollo de Musimundos están creando la nueva aplicación mobile, en la cual, vas a poder escuchar music online de tus artistas favoritos. Para evitar posibles problemas de compatibilidad, los desarrolladores decidieron que solo van a subir canciones que tengan el tipo de medio MPEG audio file. Ayudá al equipo y obtengamos una lista en las cuales tengas el nombre de las canciones que tengan ese tipo de medio.

-- Ingresá el nombre que figura en la posición número 4.

SELECT c.nombre, t.nombre
FROM canciones c
INNER JOIN
tipos_de_medio t
ON t.id = c.id_tipo_de_medio
WHERE t.nombre = 'MPEG audio file';

-- Rta: Inject The Venom