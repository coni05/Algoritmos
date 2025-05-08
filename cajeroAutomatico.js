// Inicializa el saldo de la cuenta en 0 y un arreglo vacío para las transacciones.
let saldo = 0;
let transacciones = [];

// Función para registrar una transacción (depósito o retiro) en el arreglo de transacciones.
function registrarTransaccion(monto) {
  // Si ya hay 5 transacciones registradas, elimina la más antigua.
  if (transacciones.length >= 5) {
    transacciones.shift(); // Elimina el primer elemento del arreglo.
  }
  // Agrega la nueva transacción (depósito o retiro) al final del arreglo.
  transacciones.push(monto);
}

// Función para consultar el saldo actual de la cuenta.
function consultarSaldo() {
  // Muestra una ventana emergente (alert) con el saldo actual, con dos decimales.
  alert(`💰 Saldo actual: $${saldo.toFixed(2)}`);
}

// Función para realizar un depósito.
function depositar() {
  // Solicita al usuario el monto a depositar.
  let input = prompt("Ingrese el monto a depositar:");
  // Convierte la entrada a un número decimal.
  let monto = parseFloat(input);

  // Verifica si el monto es un número válido y mayor que 0.
  if (isNaN(monto) || monto <= 0) {
    alert("❌ Monto inválido."); // Si no es válido, muestra un mensaje de error.
    return; // Termina la función sin realizar el depósito.
  }

  // Suma el monto depositado al saldo actual.
  saldo += monto;
  // Registra la transacción (depósito) en el arreglo de transacciones.
  registrarTransaccion(monto);
  // Muestra una ventana emergente con el monto depositado.
  alert(`✅ Se depositaron $${monto.toFixed(2)}`);
}

// Función para realizar un retiro.
function retirar() {
  // Solicita al usuario el monto a retirar.
  let input = prompt("Ingrese el monto a retirar:");
  // Convierte la entrada a un número decimal.
  let monto = parseFloat(input);

  // Verifica si el monto es un número válido y mayor que 0.
  if (isNaN(monto) || monto <= 0) {
    alert("❌ Monto inválido."); // Si no es válido, muestra un mensaje de error.
    return; // Termina la función sin realizar el retiro.
  }

  // Verifica si el monto es mayor que 500, el límite permitido por operación.
  if (monto > 500) {
    alert("⚠️ No puedes retirar más de $500 por operación."); // Si excede el límite, muestra un mensaje de advertencia.
    return; // Termina la función sin realizar el retiro.
  }

  // Verifica si el saldo es suficiente para realizar el retiro.
  if (monto > saldo) {
    alert("⚠️ Saldo insuficiente."); // Si no hay suficiente saldo, muestra un mensaje de advertencia.
    return; // Termina la función sin realizar el retiro.
  }

  // Resta el monto retirado del saldo.
  saldo -= monto;
  // Registra la transacción (retiro) como un número negativo.

  registrarTransaccion(-monto);

  // Muestra una ventana emergente con el monto retirado.

  alert(`✅ Se retiraron $${monto.toFixed(2)}`);

}

// Función para ver las últimas transacciones realizadas.
function verTransacciones() {
  alert("📜 Últimas transacciones:"); // Muestra el encabezado para las transacciones.
  
  // Verifica si no hay transacciones registradas.
  if (transacciones.length === 0) {
    alert("No hay transacciones registradas."); // Si no hay transacciones, muestra un mensaje.
    return; // Termina la función.
  }
  
  // Recorre todas las transacciones registradas y muestra cada una.
  transacciones.forEach((t, i) => {
    // Determina si la transacción fue un depósito o un retiro.
    let tipo = t > 0 ? "Depósito" : "Retiro";
    // Muestra cada transacción en una ventana emergente (alert), con el tipo y el monto.
    alert(`${i + 1}. ${tipo}: $${Math.abs(t).toFixed(2)}`);
  });
}

// Función para mostrar el menú principal y manejar las opciones del usuario.
function menu() {
  let opcion;
  do {
    // Muestra el menú con las opciones disponibles para el usuario.
    opcion = prompt(
      "\n--- Cajero Automático ---\n1. Consultar saldo\n2. Depositar\n3. Retirar\n4. Ver transacciones\n5. Salir\nSeleccione una opción:"
    );

    // Usa una estructura de control (switch) para realizar una acción según la opción seleccionada.
    switch (opcion) {
      case "1":
        consultarSaldo(); // Llama a la función para consultar el saldo.
        break;
      case "2":
        depositar(); // Llama a la función para realizar un depósito.
        break;
      case "3":
        retirar(); // Llama a la función para realizar un retiro.
        break;
      case "4":
        verTransacciones(); // Llama a la función para ver las transacciones.
        break;
      case "5":
        alert("👋 Gracias por usar el cajero."); // Muestra un mensaje de despedida.
        break;
      default:
        alert("❌ Opción inválida."); // Muestra un mensaje si la opción no es válida.
    }
  } while (opcion !== "5"); // Repite el menú hasta que el usuario seleccione la opción "5" para salir.
}

// Inicia el cajero mostrando el menú y permitiendo al usuario interactuar.
menu();



