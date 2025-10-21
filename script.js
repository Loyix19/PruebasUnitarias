// Función para generar un número entero aleatorio entre min (incluido) y max (incluido)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función principal para generar y mostrar la ecuación
function generarEcuacionAleatoria() {
    // 1. Generar valores aleatorios para a, b, y c (entre 1 y 20)
    // 'a' debe ser diferente de cero, lo cual se garantiza con el rango [1, 20]
    const a = getRandomInt(1, 20);
    const b = getRandomInt(1, 20);
    const c = getRandomInt(1, 20);
    
    // 2. Construir la cadena de la ecuación (usando template literals para HTML)
    const ecuacion = `${a}x<sup>2</sup> + ${b}x + ${c} = 0`;

    // 3. Insertar la ecuación en el elemento HTML
    const contenedor = document.getElementById('ecuacionAleatoria');
    if (contenedor) {
        contenedor.innerHTML = ecuacion;
    } else {
        console.error("No se encontró el elemento con el ID 'ecuacionAleatoria'.");
    }
}

// Ejecutar la función cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', generarEcuacionAleatoria);