const capacidadMaxima = 7; // Define la capacidad máxima permitida para la cola
let cola = []; // Inicializa un arreglo vacío para almacenar los nombres de los clientes en la cola

// Función para agregar un cliente a la cola
function agregarCliente() {
  if (cola.length >= capacidadMaxima) {  // Verifica si la cola ya está llena
    alert("La cola está llena. No se pueden agregar más clientes."); // Alerta si no se puede agregar más
    return; // Sale de la función para evitar agregar cliente
  }
  
  let nombre = prompt("Ingrese el nombre del cliente:"); // Solicita por prompt el nombre del cliente
  
  if (nombre && nombre.trim() !== "") { // Verifica que el nombre no esté vacío ni sea solo espacios
    cola.push(nombre.trim()); // Agrega el nombre al final de la cola quitando espacios al inicio y fin
    alert(`Cliente ${nombre.trim()} agregado a la cola.\nCola actual: ${cola.join(", ")}`); // Muestra alerta con el cliente agregado y la cola actual
  } else {
    alert("Nombre no válido."); // Alerta si el nombre ingresado es inválido
  }
}

// Función para atender al siguiente cliente en la cola
function atenderCliente() {
  if (cola.length === 0) { // Verifica si la cola está vacía
    alert("La cola está vacía. No hay clientes para atender."); // Alerta que no hay clientes para atender
    return; // Sale de la función para evitar atender
  }
  
  let clienteAtendido = cola.shift(); // Remueve y obtiene el primer cliente de la cola (FIFO)
  alert(`Cliente ${clienteAtendido} ha sido atendido.\nCola restante: ${cola.length > 0 ? cola.join(", ") : "Vacía"}`); // Muestra alerta con el cliente atendido y cola restante o "Vacía"
}

// Función principal para iniciar la simulación con menú de opciones
function iniciarSimulacion() {
  let opcion; // Variable para almacenar la opción ingresada por el usuario

  do {
    // Solicita al usuario que elija una opción del menú por prompt
    opcion = prompt(
      "Simulación de cola en supermercado\nSeleccione una opción:\n" +
      "1. Agregar cliente\n" +
      "2. Atender siguiente cliente\n" +
      "3. Salir"
    );

    switch(opcion) { // Evalúa la opción ingresada
      case '1': // Si opción es 1, llama a agregarCliente
        agregarCliente();
        break;
      case '2': // Si opción es 2, llama a atenderCliente
        atenderCliente();
        break;
      case '3': // Si opción es 3, sale del menú con mensaje de despedida
        alert("Gracias por usar la simulación. ¡Hasta luego!");
        break;
      default: // Si se ingresa otra opción, alerta que es inválida
        alert("Opción no válida. Por favor, ingrese 1, 2 o 3.");
    }
  } while(opcion !== '3'); // Repite el menú mientras no se elija la opción salir
}

// Ejecuta la función para iniciar la simulación automáticamente cuando se corre el script
iniciarSimulacion();
