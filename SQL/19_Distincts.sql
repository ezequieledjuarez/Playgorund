-- Desde el sector de recursos humanos de Musimundos nos están solicitando una lista de todos los cargos que tienen los empleados, hacé una consulta a nuestra base de datos que nos brinde el título de los cargos que tengan todos los empleados sin repetirse medio 

-- Ingresá el título que figura en la posición 4.

SELECT DISTINCT e.titulo
FROM empleados e;


-- Rta : 'IT Manager'