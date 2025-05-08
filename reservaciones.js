let saldo = 0; // Se inicializa el saldo del cajero con 0
let transacciones = []; // Se inicializa una lista vacía para almacenar las últimas transacciones (máximo 5)

// Registrar una transacción
function registrarTransaccion(monto) {
    // Si ya hay 5 transacciones almacenadas, eliminar la más antigua para mantener el límite
    if (transacciones.length >= 5) {
        transacciones.shift(); // Elimina el primer elemento (la transacción más antigua)
    }
    transacciones.push(monto); // Agrega la nueva transacción al final del arreglo
}

// Consultar saldo
function consultarSaldo() {
    // Muestra una alerta con el saldo actual, formateado a 2 decimales y un ícono de dinero
    alert(`💰 Saldo actual: $${saldo.toFixed(2)}`);
}

// Depositar dinero
function depositar() {
    // Solicita al usuario ingresar un monto para depositar y lo convierte a número decimal
    let monto = parseFloat(prompt("Ingrese el monto a depositar: $"));
    // Valida que el monto sea un número válido y positivo
    if (isNaN(monto) || monto <= 0) {
        alert("❌ Monto inválido."); // Si no es válido, muestra error y termina la función
        return;
    }
    saldo += monto; // Suma el monto al saldo actual
    registrarTransaccion(monto); // Registra la transacción como un depósito (positivo)
    alert(`✅ Se depositaron $${monto.toFixed(2)}`); // Confirma el depósito al usuario
}

// Retirar dinero
function retirar() {
    // Solicita al usuario ingresar un monto para retirar y lo convierte a número decimal
    let monto = parseFloat(prompt("Ingrese el monto a retirar: $"));
    // Valida que el monto sea un número válido y positivo
    if (isNaN(monto) || monto <= 0) {
        alert("❌ Monto inválido."); // Si no es válido, muestra error y termina la función
        return;
    }
    // Comprueba que el saldo sea suficiente para realizar el retiro
    if (monto > saldo) {
        alert("⚠️ Saldo insuficiente."); // Si no hay saldo suficiente, muestra advertencia y termina
        return;
    }
    saldo -= monto; // Resta el monto del saldo actual
    registrarTransaccion(-monto); // Registra la transacción como un retiro (negativo)
    alert(`✅ Se retiraron $${monto.toFixed(2)}`); // Confirma el retiro al usuario
}

// Mostrar transacciones
function mostrarTransacciones() {
    // Si no hay transacciones registradas, informa al usuario
    if (transacciones.length === 0) {
        alert("📜 No hay transacciones registradas.");
    } else {
        // Construye un mensaje con el listado de las últimas transacciones
        let mensaje = "📜 Últimas transacciones:\n";
        transacciones.forEach((t, i) => {
            // Determina el tipo de transacción (positivo: depósito, negativo: retiro)
            let tipo = t > 0 ? "Depósito" : "Retiro";
            // Añade la transacción al mensaje con su número, tipo y monto absoluto formateado
            mensaje += `${i + 1}. ${tipo}: $${Math.abs(t).toFixed(2)}\n`;
        });
        alert(mensaje); // Muestra el mensaje completo al usuario
    }
}

// Menú principal
function menu() {
    let opcion;
    // Bucle que se repite hasta que el usuario elija salir (opción "5")
    do {
        // Solicita al usuario seleccionar una opción del menú
        opcion = prompt(
            "--- Cajero Automático ---\n" +
            "1. Consultar saldo\n" +
            "2. Depositar dinero\n" +
            "3. Retirar dinero\n" +
            "4. Ver últimas transacciones\n" +
            "5. Salir\n\n" +
            "Seleccione una opción:"
        );

        // Ejecuta la función correspondiente según la opción seleccionada
        switch (opcion) {
            case "1":
                consultarSaldo();
                break;
            case "2":
                depositar();
                break;
            case "3":
                retirar();
                break;
            case "4":
                mostrarTransacciones();
                break;
            case "5":
                alert("👋 Gracias por usar el cajero. ¡Hasta luego!");
                break;
            default:
                alert("❌ Opción inválida."); // Si la opción no es válida, informa al usuario
        }
    } while (opcion !== "5"); // Repite mientras el usuario no elija salir
}

// Ejecutar el menú para iniciar el cajero automático
menu();
