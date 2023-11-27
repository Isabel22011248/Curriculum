class Stack {
    constructor() {
      this.data = [];
    }
  
    // Agrega un elemento a la parte superior de la pila.
    push(_data) {
      this.data.push(_data);
    }
  
    // Busca y devuelve el elemento superior de la pila.
    peek() {
      if (this.isEmpty()) {
        return "La pila está vacía";
      }
      return this.data[this.data.length - 1];
    }
  
    // Retira y devuelve el elemento superior de la pila.
    pop() {
      if (this.isEmpty()) {
        return "La pila está vacía";
      }
      return this.data.pop();
    }
  
    // Comprueba si la pila está vacía.
    isEmpty() {
      return this.data.length === 0;
    }
  
    // Devuelve el número de elementos en la pila.
    size() {
      return this.data.length;
    }
  
    // Elimina todos los elementos de la pila.
    clear() {
      this.data = [];
    }
  
    // Muestra los elementos de la pila.
  print() {
    let items = "";
    
    // Recorre los elementos de la pila en orden inverso (desde el último al primero)
    for (let i = this.data.length - 1; i >= 0; i--) {
      items += this.data[i];
  
      // Agrega la flecha "->" solo si no es el último elemento
      if (i !== 0) {
        items += "\n -> \n";
      }
    }
  
    alert(items);
  }
  }
  
  // Define el menú
  function menu() {
    const pila = new Stack();
  
    while (true) {
      const opcion = prompt(
        "Seleccione una opción:\n" +
          "1. Insertar elemento en la cima de la pila\n" +
          "2. Buscar elemento en la cima de la pila\n" +
          "3. Eliminar elemento en la cima de la pila\n" +
          "4. Comprobar si la pila está vacía\n" +
          "5. Mostrar el número de elementos de la pila\n" +
          "6. Eliminar todos los elementos de la pila\n" +
          "7. Mostrar los elementos de la pila\n" +
          "8. Salir"
      );
  
      switch (opcion) {
        case "1":
          const data = prompt("Ingresa el dato a registrar en la pila:");
          pila.push(data);
          break;
        case "2":
          const resultPeek = pila.peek();
          alert("Resultado de la búsqueda: " + resultPeek);
          break;
        case "3":
          const resultPop = pila.pop();
          alert("Resultado de la eliminación: " + resultPop);
          break;
        case "4":
          const resultEmpty = pila.isEmpty();
          alert("La pila está vacía: " + resultEmpty);
          break;
        case "5":
          const resultSize = pila.size();
          alert("Número de elementos en la pila: " + resultSize);
          break;
        case "6":
          pila.clear();
          alert("Los datos se han borrado");
          break;
        case "7":
          pila.print();
          break;
        case "8":
            window.close()
        default:
          alert("Opción inválida. Intenta nuevamente.");
          break;
      }
    }
  }
  
  // Ejecuta el menú
  menu();