-- Desde el departamento de fidelización de clientes de musimundos vamos a sacar al mercado una campaña la cual implica que nuestros clientes van a tener un título que les otorgara beneficios a la hora de realizar compras. Para esto necesitamos crear una nueva tabla en nuestra base de datos. El nombre de la tabla será tipo_cliente y dentro tendrá dos columnas, la primera llamada id_tipo_cliente siendo un int(6) primary key not null. Y el segundo campo llamado titulo sera varchar(20) y not null

-- Ingresá la consulta que creaste

-- Tip: Escribila en mayúscula 

CREATE TABLE tipo_cliente{
id_tipo_cliente INT(6) PRIMARY KEY NOT NULL,
titulo VARCHAR(20) NOT NULL
}

-- Al crear la tabla tipo_cliente el equipo de fidelización no tuvo en cuenta que cada tipo de cliente debe tener una cantidad de descuento asignada vos pasas por ahi y te preguntan si sabes algo de mysql. Hagamos una query que altere la tabla tipo_cliente agregando la columna porcentaje_descuento y que sea TINYINT UNSIGNED.

--Escribí tu query en mayúscula.

ALTER TABLE tipo_cliente{
add column porcentaje_descuento TINYINT UNSIGNED
}

