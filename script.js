// =================================================================
// script.js
// Funcionalidad Principal
// =================================================================

/**
 * Función para generar un número entero aleatorio entre min (incluido) y max (incluido)
 * @param {number} min - Límite inferior (incluido).
 * @param {number} max - Límite superior (incluido).
 * @returns {number} Número entero aleatorio.
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    // Fórmula: Math.floor(Math.random() * (max - min + 1)) + min;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Función principal para generar y mostrar la ecuación cuadrática en el DOM.
 */
function generarEcuacionAleatoria() {
    // 1. Generar valores aleatorios para a, b, y c (entre 1 y 20)
    // 'a' es diferente de cero (garantizado por el rango [1, 20])
    const a = getRandomInt(1, 20);
    const b = getRandomInt(1, 20);
    const c = getRandomInt(1, 20);
    
    // 2. Construir la cadena de la ecuación (con superíndice para HTML)
    const ecuacion = `${a}x<sup>2</sup> + ${b}x + ${c} = 0`;

    // 3. Insertar la ecuación en el elemento HTML
    const contenedor = document.getElementById('ecuacionAleatoria');
    if (contenedor) {
        contenedor.innerHTML = ecuacion;
    } else {
        console.error("No se encontró el elemento con el ID 'ecuacionAleatoria'.");
    }
}

// Ejecutar la función principal cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', generarEcuacionAleatoria);


// =================================================================
// PRUEBAS (Unitarias, Integración y Rendimiento)
// Los resultados de estas pruebas se mostrarán en la Consola del Navegador.
// =================================================================

// 1. PRUEBA UNITARIA: Validar la precisión y límites de getRandomInt.
function probarGetRandomInt() {
    console.log("\n--- 1. Ejecutando Prueba Unitaria para getRandomInt ---");
    const min = 5;
    const max = 10;
    const numTests = 1000;
    let passed = true;
    let gotMin = false;
    let gotMax = false;

    for (let i = 0; i < numTests; i++) {
        const result = getRandomInt(min, max);

        // A. Verificar que el resultado sea un entero
        if (!Number.isInteger(result)) {
            passed = false;
            console.error(`❌ FALLO: El resultado ${result} no es un entero.`);
            break;
        }

        // B. Verificar que el resultado esté dentro del rango [min, max]
        if (result < min || result > max) {
            passed = false;
            console.error(`❌ FALLO: El resultado ${result} está fuera del rango [${min}, ${max}].`);
            break;
        }

        // C. Registrar si se obtuvieron los límites (estadístico)
        if (result === min) { gotMin = true; }
        if (result === max) { gotMax = true; }
    }

    if (passed) {
        console.log(`✅ ÉXITO: getRandomInt() pasa la prueba de rango [${min}, ${max}] en ${numTests} repeticiones.`);
        if (!gotMin || !gotMax) {
             console.warn(`⚠️ Advertencia Estadística: No se observaron ambos límites (Min: ${gotMin}, Max: ${gotMax}).`);
        }
    } else {
        console.error("❌ FALLO: La prueba unitaria de getRandomInt ha fallado en alguna validación.");
    }
}

// 2. CASO DE PRUEBA DE INTEGRACIÓN: Validar la salida de generarEcuacionAleatoria.
function probarGeneracionEcuacion() {
    console.log("\n--- 2. Ejecutando Caso de Prueba de Integración para generarEcuacionAleatoria ---");
    
    // Ejecutar la función para garantizar la generación
    generarEcuacionAleatoria(); 

    const contenedor = document.getElementById('ecuacionAleatoria');
    if (!contenedor) {
        console.error("❌ FALLO: No se encontró el elemento 'ecuacionAleatoria'.");
        return;
    }
    
    const ecuacionHTML = contenedor.innerHTML.trim();
    // Patrón: (Núm 1-20)x² + (Núm 1-20)x + (Núm 1-20) = 0
    const patron = /^(\d{1,2})x<sup>2<\/sup> \+ (\d{1,2})x \+ (\d{1,2}) = 0$/;
    const match = ecuacionHTML.match(patron);

    if (match) {
        const a = parseInt(match[1]);
        const b = parseInt(match[2]);
        const c = parseInt(match[3]);

        // Verificación de los rangos [1, 20]
        const a_ok = (a >= 1 && a <= 20);
        const b_ok = (b >= 1 && b <= 20);
        const c_ok = (c >= 1 && c <= 20);

        if (a_ok && b_ok && c_ok) {
            console.log(`✅ ÉXITO: La integración de la generación de la ecuación ha pasado.`);
            console.log(`- Formato de Ecuación y Rangos de Coeficientes son correctos. Ejemplo: ${ecuacionHTML}`);
        } else {
            console.error(`❌ FALLO: Coeficientes fuera de rango [1, 20]: a=${a}, b=${b}, c=${c}`);
        }
    } else {
        console.error(`❌ FALLO: El formato de la ecuación generada es incorrecto. Resultado obtenido: "${ecuacionHTML}"`);
    }
}

// 3. PROPUESTA DE PRUEBA DE RENDIMIENTO: Medir la latencia de getRandomInt.
function probarRendimientoGetRandomInt(numRepeticiones) {
    console.log(`\n--- 3. Ejecutando Prueba de Rendimiento para getRandomInt (${numRepeticiones} veces) ---`);

    const min = 1;
    const max = 100000;
    
    // performance.now() ofrece alta precisión para medir el tiempo
    const startTime = performance.now(); 

    // Bucle de carga
    for (let i = 0; i < numRepeticiones; i++) {
        getRandomInt(min, max);
    }

    const endTime = performance.now();
    const tiempoTotal = endTime - startTime; 
    const tiempoPorOperacion = tiempoTotal / numRepeticiones;

    console.log(`📊 Rendimiento: Generación de ${numRepeticiones} enteros aleatorios completada.`);
    console.log(`- Tiempo Total: ${tiempoTotal.toFixed(3)} ms`);
    console.log(`- Latencia Promedio (por operación): ${tiempoPorOperacion.toFixed(6)} ms`);
    
    if (tiempoTotal < 100) { 
            console.log("✅ ÉXITO en Rendimiento: El cálculo es muy rápido. < 100ms para 100k iteraciones.");
    } else {
            console.warn("⚠️ Advertencia de Rendimiento: El cálculo es relativamente lento. Revisar si se requieren millones de llamadas por segundo.");
    }
}

// Ejecutar todas las pruebas una vez que el DOM esté cargado (después de la función principal)
document.addEventListener('DOMContentLoaded', () => {
    // Las funciones de prueba se llaman después de que la interfaz ya se ha generado
    probarGetRandomInt(); 
    probarGeneracionEcuacion();
    probarRendimientoGetRandomInt(100000); 
});