
// Define la clase Nodo
class Node {
    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  
  // Definimos la clase DoublyLinkedList
  class DoublyLinkedList {
    constructor() {
      this.cabeza = null;
      this.cola = null;
    }
  // Insertar al inicio
    insertAtBeginning(data) {
      const newNode = new Node(data);
      if (!this.cabeza) {
        this.cabeza = newNode;
        this.cola = newNode;
      } else {
        newNode.next = this.cabeza;
        this.cabeza.prev = newNode;
        this.cabeza = newNode;
      }
      alert("Elemento insertado al inicio: " + data);
    }
  
    // Insertar al final    
    insertAtEnd(data) {
      const newNode = new Node(data);
      if (!this.cabeza) {
        this.cabeza = newNode;
        this.cola = newNode;
      } else {
        newNode.prev = this.cola;
        this.cola.next = newNode;
        this.cola = newNode;
      }
      alert("Elemento insertado al final: " + data);
    }
    // Eliminar al inicio
    deleteAtBeginning() {
      if (!this.cabeza) {
        alert("La lista está vacía.");
      } else {
        if (this.cabeza === this.cola) {
          this.cabeza = null;
          this.cola = null;
        } else {
          const temp = this.cabeza;
          this.cabeza = this.cabeza.next;
          this.cabeza.prev = null;
          temp.next = null;
        }
        alert("Elemento eliminado al inicio.");
      }
    }
    // Eliminar al final
    deleteAtEnd() {
      if (!this.cabeza) {
        alert("La lista está vacía.");
      } else {
        if (this.cabeza === this.cola) {
          this.cabeza = null;
          this.cola = null;
        } else {
          const temp = this.cola;
          this.cola = this.cola.prev;
          this.cola.next = null;
          temp.prev = null;
        }
        alert("Elemento eliminado al final.");
      }
    }
    // Buscar dato
    search(data) {
      let currentNode = this.cabeza;
      while (currentNode) {
        if (currentNode.data === data) {
          return true;
        }
        currentNode = currentNode.next;
      }
      return false;
    }
  
    display() {
      let currentNode = this.cabeza;
      let elements = "";
      while (currentNode) {
        elements += currentNode.data + " <-> ";
        currentNode = currentNode.next;
      }
      elements += "null";
      alert("Elementos de la lista doblemente enlazada:\n" + elements);
    }
  }
  // mostrar en el menu
  function menu() {
    const lista = new DoublyLinkedList();
  
    while (true) {
      const opcion = prompt(
        "Seleccione una opción:\n" +
          "1. Insertar elemento al inicio de la lista\n" +
          "2. Insertar elemento al final de la lista\n" +
          "3. Eliminar elemento al inicio de la lista\n" +
          "4. Eliminar elemento al final de la lista\n" +
          "5. Buscar elemento en la lista\n" +
          "6. Mostrar elementos de la lista\n" +
          "7. Salir"
      );
  
      switch (opcion) {
        case "1":
          const data1 = prompt("Ingresa el dato a insertar al inicio:");
          lista.insertAtBeginning(data1);
          break;
        case "2":
          const data2 = prompt("Ingresa el dato a insertar al final:");
          lista.insertAtEnd(data2);
          break;
        case "3":
          lista.deleteAtBeginning();
          break;
        case "4":
          lista.deleteAtEnd();
          break;
        case "5":
          const searchData = prompt("Ingresa el dato a buscar:");
          const resultSearch = lista.search(searchData);
          alert("Resultado de la búsqueda: " + resultSearch);
          break;
        case "6":
          lista.display();
          break;
        case "7":
            alert("Saliendo del programa.");
            window.close()
            return;
          default:
            alert("Opción inválida. Intenta nuevamente.");
            break;
        }
      }
    }
    
menu();