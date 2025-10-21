# Pruebas Unitarias - Chavez Santos Jose Roberto - Morales Alvarado Carlos

# 1.- Prueba Unitaria (Valor Minimo y Maximo)

La Prueba unitaria consiste en verificar que una funcion o un componente de nuestro proyecto funcione correctamente de forma aislada
En nuestro caso probamos que la funcion *getRandomInt* devuelva un valor dentro del rango especificado (min y max incluidos).

![prueba unitaria uno](https://github.com/Loyix19/PruebasUnitarias/blob/main/PruebaUnitaria1.png)

La prueba validará que al menos una vez se obtengan los valores mínimo y máximo dentro de un número suficiente de ejecuciones, asegurando que los límites son inclusivos, y que el valor retornado siempre es un entero dentro del rango.


# 2.- Caso de Prueba de Integracion (Generacion de Ecuacion)

Las Pruebas de integracion verifican que dos o mas partes del sistema (como las funciones) trabajen juntas correctamente.
En nuestra caso probaremos la integracion entre *getRandomInt* y *generarEcuacionAleatoria*.

![prueba unitaria uno](https://github.com/Loyix19/PruebasUnitarias/blob/main/PruebaUnitaria2.png) 

Aqui la prueba validara que nuestra funcion *generarEcuacionAleatoria*:
1.- Pueda encontrar un contenedor HTML 
2.- Generar una cadena de texto que coincida con el formato esperado de la ecuacion cuadratica *(_x² + _x + _ = 0).*
3.- Verificar que los coeficientes a,b,c sean numeros enteros dentro del rango *[1,20]*








