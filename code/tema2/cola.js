class Queue {
  constructor() {
    this.data = [];
  }

  // Agrega un elemento al final de la cola.
  enqueue(_data) {
    this.data.push(_data);
  }

  // Devuelve el elemento frontal de la cola sin eliminarlo.
  front() {
    if (this.isEmpty()) {
      return "La cola está vacía";
    }
    return this.data[0];
  }

  // Elimina y devuelve el elemento frontal de la cola.
  dequeue() {
    if (this.isEmpty()) {
      return "La cola está vacía";
    }
    return this.data.shift();
  }

  // Comprueba si la cola está vacía.
  isEmpty() {
    return this.data.length === 0;
  }

  // Devuelve el número de elementos en la cola.
  size() {
    return this.data.length;
  }

  // Elimina todos los elementos de la cola.
  clear() {
    this.data = [];
  }

    // Muestra los elementos de la pila.
    print() {
      let items = ""
      items += this.data.join('\n -> \n') 
      items += " \n null"
      alert(items)
    }
  }

// Define el menú
function menu() {
  const cola = new Queue();

  while (true) {
    const opcion = prompt(
      "Seleccione una opción:\n" +
        "1. Insertar elemento al final de la cola\n" +
        "2. Buscar elemento frontal de la cola\n" +
        "3. Eliminar elemento frontal de la cola\n" +
        "4. Comprobar si la cola está vacía\n" +
        "5. Mostrar el número de elementos en la cola\n" +
        "6. Eliminar todos los elementos de la cola\n" +
        "7. Mostrar los elementos de la cola\n" +
        "8. Salir"
    );

    switch (opcion) {
      case "1":
        const data = prompt("Ingresa el dato a registrar en la cola:");
        cola.enqueue(data);
        break;
      case "2":
        const resultFront = cola.front();
        alert("Resultado de la búsqueda: " + resultFront);
        break;
      case "3":
        const resultDequeue = cola.dequeue();
        alert("Resultado de la eliminación: " + resultDequeue);
        break;
      case "4":
        const resultEmpty = cola.isEmpty();
        alert("La cola está vacía: " + resultEmpty);
        break;
      case "5":
        const resultSize = cola.size();
        alert("Número de elementos en la cola: " + resultSize);
        break;
      case "6":
        cola.clear();
        alert("Los datos se han borrado");
        break;
      case "7":
        cola.print();
        break;
      case "8":
        window.close() //Se utiliza para cerrar la ventana
        return;
      default:
        alert("Opción inválida. Intenta nuevamente.");
        break;
    }
  }
}

// Ejecuta el menú
menu();












































