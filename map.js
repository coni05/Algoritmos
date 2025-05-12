// Mapa que representa el estado de las habitaciones: 0 = libre, 1 = ocupada
let habitaciones = new Map([
  [1, 0], // Habitación 1 está libre
  [2, 0], // Habitación 2 está libre
  [3, 0], // Habitación 3 está libre
  [4, 0], // Habitación 4 está libre
  [5, 0]  // Habitación 5 está libre
]);

// Función para mostrar el estado de todas las habitaciones
const mostrarEstado = () => {
  let estado = "Estado de habitaciones:\n"; // Inicializa un string para mostrar el estado
  // Recorre cada habitación usando forEach para construir el estado
  habitaciones.forEach((valor, clave) => {
    // Agrega el estado de cada habitación al string
    estado += `Habitación ${clave}: ${valor === 0 ? "Libre" : "Ocupada"}\n`;
  });
  // Cuenta cuántas habitaciones están libres
  const libres = [...habitaciones.values()].filter(v => v === 0).length;
  // Muestra el estado y la cantidad de habitaciones libres
  alert(`${estado}\nHabitaciones libres: ${libres}`);
};

// Función para mostrar las habitaciones libres
const mostrarHabitacionesLibres = () => {
  // Filtra las habitaciones que están libres y mapea para obtener solo las claves
  const libres = [...habitaciones.entries()]
    .filter(([clave, valor]) => valor === 0) // Filtra las habitaciones libres
    .map(([clave]) => clave); // Mapea para obtener solo las claves (números de habitación)
  // Muestra las habitaciones libres
  alert(`Habitaciones libres: ${libres.join(", ")}`);
};

// Función para reservar una habitación
const reservarHabitacion = (num) => {
  // Verifica si el número de habitación es válido
  if (isNaN(num) || num < 1 || num > 5) {
    alert("Número de habitación inválido. Usa 1-5.");
  } else if (habitaciones.get(num) === 1) { // Verifica si la habitación ya está ocupada
    alert("Habitación ya ocupada.");
  } else {
    habitaciones.set(num, 1); // Reserva la habitación
    alert(`Habitación ${num} reservada con éxito.`);
  }
  mostrarHabitacionesLibres(); // Muestra las habitaciones libres después de reservar
};

// Función para liberar una habitación
const liberarHabitacion = (num) => {
  // Verifica si el número de habitación es válido
  if (isNaN(num) || num < 1 || num > 5) {
    alert("Número de habitación inválido. Usa 1-5.");
  } else if (habitaciones.get(num) === 0) { // Verifica si la habitación ya está libre
    alert("Habitación ya está libre.");
  } else {
    habitaciones.set(num, 0); // Libera la habitación
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

        