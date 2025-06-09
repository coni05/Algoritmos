"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// Arreglo para las 5 habitaciones (0 = libre, 1 = ocupada)
var habitaciones = [0, 0, 0, 0, 0]; // Inicializa un arreglo con 5 habitaciones, todas libres
// Función para mostrar el estado de las habitaciones
var mostrarEstado = function () {
    var estado = "Estado de habitaciones:\n"; // Inicializa un string para mostrar el estado
    // Recorre cada habitación para construir el estado
    for (var i = 0; i < habitaciones.length; i++) {
        // Agrega el estado de cada habitación al string
        estado += "Habitaci\u00F3n ".concat(i + 1, ": ").concat(habitaciones[i] === 0 ? "Libre" : "Ocupada", "\n");
    }
    // Cuenta cuántas habitaciones están libres
    var libres = habitaciones.filter(function (h) { return h === 0; }).length;
    // Muestra el estado y la cantidad de habitaciones libres
    console.log("".concat(estado, "\nHabitaciones libres: ").concat(libres));
};
// Función para mostrar las habitaciones libres
var mostrarHabitacionesLibres = function () {
    // Crea un arreglo con los números de las habitaciones libres
    var libres = habitaciones
        .map(function (estado, index) { return (estado === 0 ? index + 1 : null); }) // Mapea el estado a los índices
        .filter(function (num) { return num !== null; }); // Filtra los valores nulos
    // Muestra las habitaciones libres
    console.log("Habitaciones libres: ".concat(libres.join(", ")));
};
// Función para reservar una habitación
var reservarHabitacion = function (num) {
    if (isNaN(num) || num < 1 || num > 5) {
        alert("Número de habitación inválido. Usa 1-5.");
    }
    else if (habitaciones[num - 1] === 1) {
        alert("Habitación ya ocupada.");
    }
    else {
        habitaciones[num - 1] = 1;
        alert("Habitaci\u00F3n ".concat(num, " reservada con \u00E9xito."));
    }
    mostrarHabitacionesLibres();
};
// Función para liberar una habitación
var liberarHabitacion = function (num) {
    if (isNaN(num) || num < 1 || num > 5) {
        alert("Número de habitación inválido. Usa 1-5.");
    }
    else if (habitaciones[num - 1] === 0) {
        alert("Habitación ya está libre.");
    }
    else {
        habitaciones[num - 1] = 0;
        alert("Habitaci\u00F3n ".concat(num, " liberada con \u00E9xito."));
    }
    mostrarHabitacionesLibres();
};
// Menú principal
while (true) {
    // Muestra un menú para que el usuario elija una opción
    var opcion = readlineSync.question("1. Ver estado\n2. Reservar\n3. Liberar\n4. Salir\nElige una opción:");
    if (opcion === "1") {
        mostrarEstado(); // Muestra el estado de las habitaciones
    }
    else if (opcion === "2") {
        var num = readlineSync.questionInt("Ingresa el número de habitación(1-5):"); // Solicita el número de habitación
        reservarHabitacion(num); // Intenta reservar la habitación
    }
    else if (opcion === "3") {
        var num = readlineSync.questionInt("Ingresa el número de habitación(1-5):"); // Solicita el número de habitación
        liberarHabitacion(num); // Intenta liberar la habitación
    }
    else if (opcion === "4") {
        console.log("Saliendo..."); // Mensaje de salida
        break; // Sale del bucle
    }
    else {
        console.log("Opción inválida."); // Mensaje si la opción no es válida
    }
}
