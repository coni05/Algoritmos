// Conjunto para representar las habitaciones ocupadas
let habitacionesOcupadas = new Set(); // Se utiliza un Set para almacenar los números de las habitaciones ocupadas

// Función para mostrar el estado de las habitaciones
const mostrarEstado = () => {
  let estado = "Estado de habitaciones:\n"; // Inicializa un string para mostrar el estado
  // Recorre las habitaciones del 1 al 5
  for (let i = 1; i <= 5; i++) {
    // Agrega el estado de cada habitación al string
    estado += `Habitación ${i}: ${habitacionesOcupadas.has(i) ? "Ocupada" : "Libre"}\n`;
  }
  // Calcula cuántas habitaciones están libres
  const libres = 5 - habitacionesOcupadas.size; // Total de habitaciones menos las ocupadas
  // Muestra el estado y la cantidad de habitaciones libres
  alert(`${estado}\nHabitaciones libres: ${libres}`);
};

// Función para mostrar las habitaciones libres
const mostrarHabitacionesLibres = () => {
  const libres = []; // Inicializa un array para almacenar los números de las habitaciones libres
  // Recorre las habitaciones del 1 al 5
  for (let i = 1; i <= 5; i++) {
    // Si la habitación no está ocupada, la agrega al array de libres
    if (!habitacionesOcupadas.has(i)) libres.push(i);
  }
  // Muestra las habitaciones libres
  alert(`Habitaciones libres: ${libres.join(", ")}`);
};

// Función para reservar una habitación
const reservarHabitacion = (num) => {
  // Verifica si el número de habitación es válido
  if (isNaN(num) || num < 1 || num > 5) {
    alert("Número de habitación inválido. Usa 1-5.");
  } else if (habitacionesOcupadas.has(num)) { // Verifica si la habitación ya está ocupada
    alert("Habitación ya ocupada.");
  } else {
    habitacionesOcupadas.add(num); // Reserva la habitación agregándola al Set
    alert(`Habitación ${num} reservada con éxito.`);
  }
  mostrarHabitacionesLibres(); // Muestra las habitaciones libres después de reservar
};

// Función para liberar una habitación
const liberarHabitacion = (num) => {
  // Verifica si el número de habitación es válido
  if (isNaN(num) || num < 1 || num > 5) {
    alert("Número de habitación inválido. Usa 1-5.");
  } else if (!habitacionesOcupadas.has(num)) { // Verifica si la habitación ya está libre
    alert("Habitación ya está libre.");
  } else {
    habitacionesOcupadas.delete(num); // Libera la habitación eliminándola del Set
    alert(`Habitación ${num} liberada con éxito.`);
  }
  mostrarHabitacionesLibres(); // Muestra las habitaciones libres después de liberar
};

// Menú principal
while (true) {
  // Muestra un menú para que el usuario elija una opción
  let opcion = prompt("1. Ver estado\n2. Reservar\n3. Liberar\n4. Salir\nElige una opción:");
  if (opcion === "1") {
    mostrarEstado(); // Muestra el estado de las habitaciones
  } else if (opcion === "2") {
    let num = parseInt(prompt("Ingresa el número de habitación (1-5):")); // Solicita el número de habitación
    reservarHabitacion(num); // Intenta reservar la habitación
  } else if (opcion === "3") {
    let num = parseInt(prompt("Ingresa el número de habitación (1-5):")); // Solicita el número de habitación
    liberarHabitacion(num); // Intenta liberar la habitación
  } else if (opcion === "4") {
    alert("Saliendo..."); // Mensaje de salida
    break; // Sale del bucle
  } else {
    alert("Opción inválida."); // Mensaje si la opción no es válida
  }
}
