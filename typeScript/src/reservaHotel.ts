import * as readlineSync from 'readline-sync';

// Arreglo para las 5 habitaciones (0 = libre, 1 = ocupada)
let habitaciones: number[]= [0, 0, 0, 0, 0]; // Inicializa un arreglo con 5 habitaciones, todas libres

// Función para mostrar el estado de las habitaciones
const mostrarEstado = ():void => {
  let estado: string= "Estado de habitaciones:\n"; // Inicializa un string para mostrar el estado
  // Recorre cada habitación para construir el estado
  for (let i:number = 0; i < habitaciones.length; i++) {
    // Agrega el estado de cada habitación al string
    estado += `Habitación ${i + 1}: ${habitaciones[i] === 0 ? "Libre" : "Ocupada"}\n`;
  }
  // Cuenta cuántas habitaciones están libres
  const libres :number= habitaciones.filter(h => h === 0).length;
  // Muestra el estado y la cantidad de habitaciones libres
  console.log(`${estado}\nHabitaciones libres: ${libres}`);
};

// Función para mostrar las habitaciones libres
const mostrarHabitacionesLibres = (): void => {
  // Crea un arreglo con los números de las habitaciones libres
  const libres:number[] = habitaciones
    .map((estado, index) => (estado === 0 ? index + 1 : null)) // Mapea el estado a los índices
    .filter((num) => num !== null); // Filtra los valores nulos
  // Muestra las habitaciones libres
  console.log(`Habitaciones libres: ${libres.join(", ")}`);
};

// Función para reservar una habitación
const reservarHabitacion = (num:number):void => {
 if (isNaN(num) || num < 1 || num > 5) {
 console.log("Número de habitación inválido. Usa 1-5.");
 } else if (habitaciones[num - 1] === 1) {
console.log("Habitación ya ocupada.");
 } else {
 habitaciones[num - 1] = 1;
 console.log(`Habitación ${num} reservada con éxito.`);
 }
 mostrarHabitacionesLibres();
};

// Función para liberar una habitación
const liberarHabitacion = (num:number): void => {
 if (isNaN(num) || num < 1 || num > 5) {
 console.log("Número de habitación inválido. Usa 1-5.");
 } else if (habitaciones[num - 1] === 0) {
 console.log("Habitación ya está libre.");
 } else {
 habitaciones[num - 1] = 0;
 console.log(`Habitación ${num} liberada con éxito.`);
 }
 mostrarHabitacionesLibres();
};

// Menú principal
while (true) {
  // Muestra un menú para que el usuario elija una opción
  let opcion: string= readlineSync.question("1. Ver estado\n2. Reservar\n3. Liberar\n4. Salir\nElige una opción:");
  if (opcion === "1") {
    mostrarEstado(); // Muestra el estado de las habitaciones
  } else if (opcion === "2") {
    let num:number = readlineSync.questionInt("Ingresa el número de habitación(1-5):"); // Solicita el número de habitación
    reservarHabitacion(num); // Intenta reservar la habitación
  } else if (opcion === "3") {
    let num:number = readlineSync.questionInt("Ingresa el número de habitación(1-5):"); // Solicita el número de habitación
    liberarHabitacion(num); // Intenta liberar la habitación
  } else if (opcion === "4") {
    console.log("Saliendo..."); // Mensaje de salida
    break; // Sale del bucle
  } else {
    console.log("Opción inválida."); // Mensaje si la opción no es válida
  }
}