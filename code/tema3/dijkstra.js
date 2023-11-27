class Grafo {
  constructor() {
    this.vertices = new Set();
    this.aristas = {};
  }

  agregarVertice(vertice) {
    this.vertices.add(vertice);
    this.aristas[vertice] = {};
  }

  agregarArista(origen, destino, peso) {
    this.aristas[origen][destino] = peso;
    this.aristas[destino][origen] = peso;
  }

  dijkstra(origen) {
    const distancias = {};
    const visitados = new Set();
    const previos = {};

    for (const vertice of this.vertices) {
      distancias[vertice] = Infinity;
    }
    distancias[origen] = 0;

    while (visitados.size < this.vertices.size) {
      let verticeActual = null;
      let distanciaMinima = Infinity;

      // Encuentra el vertice no visitado con la distancia mÃ­nima
      for (const vertice in distancias) {
        if (!visitados.has(vertice) && distancias[vertice] < distanciaMinima) {
          verticeActual = vertice;
          distanciaMinima = distancias[vertice];
        }
      }

      if (verticeActual === null) {
        break;
      }

      visitados.add(verticeActual);

      // Actualiza las distancias de los vertices adyacentes
      for (const vecino in this.aristas[verticeActual]) {
        const peso = this.aristas[verticeActual][vecino];
        const distancia = distancias[verticeActual] + peso;

        if (distancia < distancias[vecino]) {
          distancias[vecino] = distancia;
          previos[vecino] = verticeActual;
        }
      }
    }

    return { distancias, previos };
  }

  obtenerRutaMasCorta(origen, destino) {
    const { distancias, previos } = this.dijkstra(origen);

    if (distancias[destino] === Infinity) {
      return null; // No se encontrar una ruta
    }

    const ruta = [destino];
    let vertice = destino;

    while (vertice !== origen) {
      vertice = previos[vertice];
      ruta.unshift(vertice);
    }

    return { distancia: distancias[destino], ruta };
  }
}

// Funcion para mostrar el men y realizar las operaciones
function mostrarMenu() {
  let opcion = prompt('--- MenÃº ---\n1. Agregar vertice\n2. Agregar arista\n3. Encontrar ruta mÃ¡s corta\n4. Salir\n-------------\nIngrese la opciÃ³n deseada:');
  
  switch (opcion) {
    case '1':
      let vertice = prompt('Ingrese el nombre del vertice:');
      grafo.agregarVertice(vertice);
      alert(`El vertice ${vertice} se agregar correctamente.`);
      mostrarMenu();
      break;
    case '2':
      let origen = prompt('Ingrese el vertice de origen:');
      let destino = prompt('Ingrese el vertice de destino:');
      let peso = parseInt(prompt('Ingrese el peso de la arista:'));
      grafo.agregarArista(origen, destino, peso);
      alert(`La arista entre ${origen} y ${destino} se agregar correctamente.`);
      mostrarMenu();
      break;
    case '3':
      let origenRuta = prompt('Ingrese el vertice de origen:');
      let destinoRuta = prompt('Ingrese el vertice de destino:');
      let rutaMasCorta = grafo.obtenerRutaMasCorta(origenRuta, destinoRuta);
      if (rutaMasCorta) {
        alert(`La distancia mÃ¡s corta entre ${origenRuta} y ${destinoRuta} es ${rutaMasCorta.distancia}.\nRuta: ${rutaMasCorta.ruta.join(' -> ')}`);
      } else {
        alert('No se encontrÃ³ una ruta entre los vertices especificados.');
      }
      mostrarMenu();
      break;
    case '4':
      window.close()
      alert('Saliendo del programa...');
      break;
    default:
      alert('OpciÃ³n invÃ¡lida. Intente nuevamente.');
      mostrarMenu();
      break;
  }
}

// Crear instancia del grafo
const grafo = new Grafo();

// Mostrar el menÃº
mostrarMenu();