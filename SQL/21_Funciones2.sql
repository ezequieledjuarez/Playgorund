-- El área de estrategia de Musimundos está analizando cómo implementar una acción de marketing en la cual tiene que destinar un presupuesto acorde a la cantidad de clientes que tenga cada país. Por esto te pide que lo ayudemos a identificar la cantidad de clientes que son de Brazil. Generemos una consulta en nuestra base de datos que nos traiga la cuenta de todos los clientes que son de Brazil.

-- ingresá el número que te dio como resultado.

SELECT COUNT(*) as DeBrasil
FROM clientes
WHERE pais = "Brazil";

--Rta: 5

-- En musimundos estamos muy atentos a que nuestros usuarios encuentren una cantidad apropiada de canciones del estilo que quieran escuchar, es por eso que en esta oportunidad nos están solicitando una lista de cuantas canciones tenemos por género. Hacé una consulta a la base de datos que traiga el nombre del género y la cantidad de canciones que posee.

-- ingresá el número que te dio como resultado las canciones de género Blues.

SELECT COUNT(id_genero), generos.nombre
FROM canciones
INNER JOIN generos
ON generos.id = canciones.id_genero
GROUP BY id_genero;

--Rta: 81

-- Es época de balances y en musimundos queremos saber cuánto es el dinero que la gente lleva gastado en nuestra empresa. Hacé una consulta a nuestra base de datos que sume el total de todas las facturas que emitió la empresa.

-- insertá el número que obtuviste.

SELECT SUM(total) AS Recaudado
FROM facturas;

--Rta: '2328.60'

-- En el sitio web de Musimundos queremos mejorar nuestras vistas de productos colocando al pie de cada álbum el promedio de duración de cada álbum. Tomemos como ejemplo a la banda AC/DC y consulta a la base de datos el álbum 'Let There Be Rock' , lista sus canciones , su duración y saca un promedio de duracion de las mismas. 

-- insertá el número que obtuviste 

SELECT AVG(milisegundos)
FROM canciones c
INNER JOIN 
albumes a
ON c.id_album = a.id
WHERE a.titulo = 'Let There Be Rock';

-- Rta: '306657.3750'

-- En el equipo de desarrollo están mudando de servidor a nuestra aplicación, y quieren saber cuál es el peso de cada archivo de canciones para buscar un servidor adecuado con capacidad suficiente.

-- Hace una consulta a la base de datos para saber cuál es el archivo con menor peso en bytes.

-- Insertá el número que obtuviste.

SELECT MIN(bytes)
FROM canciones;

-- Rta: '38747'

-- En el salón de Musimundos, estamos ofreciendo una promoción para los clientes regulares donde regalamos un 20% de descuento en su compra si alguna vez el cliente hizo una compra con un total de más de 12. El cliente número 48 acaba de entrar por la puerta y el vendedor quiere corroborar si el descuento se aplica.

-- Hacé una consulta a la base de datos que nos traiga el total de la factura más cara que tenga el cliente número 48.

SELECT MAX(total)
FROM facturas
INNER JOIN clientes
ON clientes.id = facturas.id_cliente
WHERE clientes.id = 48;

-- Rta: '13.86'