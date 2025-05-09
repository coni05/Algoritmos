// Arreglo para las 5 habitaciones (0 = libre, 1 = ocupada)
let habitaciones = [0, 0, 0, 0, 0];

// Función para mostrar estado de habitaciones
const mostrarEstado = () => {
  let estado = "Estado de habitaciones:\n";
  for (let i = 0; i < habitaciones.length; i++) {
    estado += `Habitación ${i + 1}: ${habitaciones[i] === 0 ? "Libre" : "Ocupada"}\n`;
  }
  const libres = habitaciones.filter(h => h === 0).length;
  alert(`${estado}\nHabitaciones libres: ${libres}`);
};

// Función para mostrar las habitaciones libres
const mostrarHabitacionesLibres = () => {
  const libres = habitaciones
    .map((estado, index) => (estado === 0 ? index + 1 : null))
    .filter((num) => num !== null);
  alert(`Habitaciones libres: ${libres.join(", ")}`);
};

// Función para reservar una habitación
const reservarHabitacion = (num) => {
 if (num < 1 || num > 5) {
 alert("Número de habitación inválido. Usa 1-5.");
 } else if (habitaciones[num - 1] === 1) {
 alert("Habitación ya ocupada.");
 } else {
 habitaciones[num - 1] = 1;
 alert(`Habitación ${num} reservada con éxito.`);
 }
 mostrarHabitacionesLibres();
};

// Función para liberar una habitación
const liberarHabitacion = (num) => {
 if (num < 1 || num > 5) {
 alert("Número de habitación inválido. Usa 1-5.");
 } else if (habitaciones[num - 1] === 0) {
 alert("Habitación ya está libre.");
 } else {
 habitaciones[num - 1] = 0;
 alert(`Habitación ${num} liberada con éxito.`);
 }
 mostrarHabitacionesLibres();
};

// Menú principal
while (true) {
 let opcion = prompt("1. Ver estado\n2. Reservar\n3. Liberar\n4.Salir\nElige una opción:");
 if (opcion === "1") {
 mostrarEstado();
 } else if (opcion === "2") {
 let num = parseInt(prompt("Ingresa el número de habitación(1-5):"));
 reservarHabitacion(num);
 } else if (opcion === "3") {
 let num = parseInt(prompt("Ingresa el número de habitación(1-5):"));
 liberarHabitacion(num);
 } else if (opcion === "4") {
 alert("Saliendo...");
 break;
 } else {
 alert("Opción inválida.");
 }
}