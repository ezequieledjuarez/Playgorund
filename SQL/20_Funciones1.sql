-- Desde el departamento de desarrollo de Musimundos están preparando la parte de la aplicación en la cual accedemos a una canción en particular. Nos comentan que debajo de la imagen de la canción deberá aparecer un texto específico, y necesitan nuestra ayuda. El texto tiene que ser:

"La canción " (nombre del tema) " fue compuesta por " (compositor del tema).

-- Hacé una consulta a nuestra base de datos que nos traiga el nombre y el compositor de cada tema, sin repeticiones y agregando el texto que el equipo de desarrollo nos mencionaba.

-- Ojo! Tené en cuenta los espacios dentro de los textos que nos pidieron añadir.

SELECT DISTINCT CONCAT("La cancion ", c.nombre ," fue compuesta por ", c.compositor)
from canciones c;

--Ingresá el primer resultado que obtuviste, sin comillas.

-- Rta: La canción For Those About To Rock (We Salute You) fue compuesta por Angus Young, Malcolm Young, Brian Johnson


-- En el departamento de Recursos Humanos de Musimundos quieren saber la edad de los empleados al momento que empezaron a trabajar en la empresa.

-- Hacé una consulta la base de datos que traiga la diferencia entre su fecha de nacimiento y la fecha de contratación.

-- Ingresá la tercer diferencia que obtuviste.

-- TIP: Recordá que DATEDIFF() retorna la diferencia entre las fechas expresada en DÍAS. Teniendo esto en cuenta y sabiendo que un año pretende tener 365, cómo realizarías la consulta?

-- Para darte una ayuda, te presentamos la funcion FLOOR(), que redondea cualquier número con decimales hacia abajo.

SELECT FLOOR(DATEDIFF(e.fecha_de_contratacion, e.fecha_nacimiento)/365) as Edad
FROM empleados e;

-- Rta: '27'

--En la aplicación de Musimundos, un usuario está revisando sus últimas facturas y quiere saber en qué mes fue su última factura.

--Hacé una consulta a la base de datos que traiga todas las facturas del cliente número 2 ordenadas por su fecha y extrae el mes de la misma.

--Ingresá el número de mes de la última factura.

SELECT EXTRACT(MONTH FROM f.fecha_factura) as Facturas
FROM facturas f
WHERE id_cliente = 2;

-- Rta: 12

