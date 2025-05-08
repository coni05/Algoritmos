// Arreglo con los nombres de los productos
const productos = ["Agua", "Galletas", "Refresco", "Chocolate", "Papas"];

// Arreglo con las cantidades disponibles de cada producto
const inventario = [3, 5, 2, 4, 1];

// Mostrar el inventario actual
function mostrarInventario() {
  let mensaje = "INVENTARIO DISPONIBLE:\n"; // Inicializa un mensaje que contendrá la lista de productos y sus cantidades
  for (let i = 0; i < productos.length; i++) { // Itera sobre el arreglo de productos
    mensaje += `${i}: ${productos[i]} - Cantidad: ${inventario[i]}\n`; // Añade al mensaje el nombre del producto y su cantidad
  }
  alert(mensaje); // Muestra el mensaje con el inventario disponible
}

// Procesar el pago
function procesarPago() {
  const moneda = prompt("Inserta una moneda de $1 (escribe 1 para continuar):"); // Solicita al usuario insertar una moneda
  if (moneda === "1") { // Si el usuario inserta "1" (moneda válida)
    return true; // Retorna verdadero, indicando que el pago ha sido procesado correctamente
  } else {
    alert("Pago inválido. Debes insertar exactamente $1."); // Muestra un mensaje si la moneda no es válida
    return false; // Retorna falso si el pago no es válido
  }
}

// Buscar el primer producto disponible con stock
function sugerirOtroProducto() {
  for (let i = 0; i < inventario.length; i++) { // Itera sobre el arreglo de inventario
    if (inventario[i] > 0) { // Si la cantidad de un producto es mayor que 0 (está disponible)
      return i; // Devuelve el índice del primer producto disponible
    }
  }
  return -1; // Si no hay productos disponibles, retorna -1
}

// Entregar el producto si es válido y hay stock
function entregarProducto(codigo) {
  if (codigo < 0 || codigo >= productos.length) { // Verifica si el código ingresado es válido (dentro del rango de productos)
    alert("Código de producto inválido."); // Si no es válido, muestra un mensaje
    return false; // Retorna falso porque no se puede entregar el producto
  }

  if (inventario[codigo] > 0) { // Si el producto tiene stock (cantidad mayor a 0)
    inventario[codigo]--; // Disminuye la cantidad del producto en el inventario
    alert(`¡Gracias! Aquí tienes tu ${productos[codigo]}.\nStock restante: ${inventario[codigo]}`); // Muestra un mensaje con el producto entregado y el stock restante
    return true; // Retorna verdadero, indicando que el producto fue entregado correctamente
  } else {
    alert(`Lo sentimos, el producto "${productos[codigo]}" está agotado.`); // Muestra un mensaje si el producto está agotado
    const sugerencia = sugerirOtroProducto(); // Llama a la función para sugerir otro producto disponible
    if (sugerencia !== -1) { // Si hay algún producto disponible
      alert(`Sugerencia: Puedes comprar "${productos[sugerencia]}" (Código ${sugerencia}).`); // Muestra el producto sugerido
      return entregarProducto(sugerencia); // Intenta entregar el producto sugerido
    } else {
      alert("Todos los productos están agotados."); // Si no hay productos disponibles, muestra un mensaje
      return false; // Retorna falso, ya que no se puede entregar ningún producto
    }
  }
}

// Verifica si todos los productos están agotados
function todosAgotados() {
  return inventario.every(cantidad => cantidad === 0); // Devuelve verdadero si todos los productos están agotados (todas las cantidades son 0)
}

// Función principal que controla el flujo de la máquina expendedora
function maquinaExpendedora() {
  let continuar = true; // Variable de control del ciclo

  while (continuar) { // Inicia un ciclo que continuará hasta que todos los productos estén agotados o el usuario decida salir
    mostrarInventario(); // Muestra el inventario actual

    const entrada = prompt("Introduce el código del producto que deseas (0 a 4), o escribe 'salir' para terminar:"); // Solicita al usuario que ingrese el código del producto o "salir"

    if (entrada.toLowerCase() === 'salir') { // Si el usuario escribe "salir" (sin importar mayúsculas/minúsculas)
      alert("¡Gracias por usar la máquina expendedora! Hasta luego."); // Muestra un mensaje de despedida
      continuar = false; // Detiene el ciclo
      break; // Sale del ciclo
    }

    const codigo = parseInt(entrada); // Convierte la entrada del usuario en un número entero

    if (!isNaN(codigo)) { // Si la entrada es un número válido (no NaN)
      if (procesarPago()) { // Si el pago es exitoso
        const resultado = entregarProducto(codigo); // Intenta entregar el producto con el código dado
        if (!resultado) { // Si no se pudo entregar el producto (por ejemplo, agotado)
          continuar = false; // Detiene el ciclo
        }
      }
    } else {
      alert("Debes introducir un número válido."); // Si la entrada no es válida, muestra un mensaje
    }

    // Termina el ciclo si todos los productos están agotados
    if (todosAgotados()) {
      alert("¡Todos los productos están agotados! La máquina dejará de funcionar.");
      continuar = false; // Detiene el ciclo
    }
  }
}

// Ejecutar el programa llamando a la función principal
maquinaExpendedora();

