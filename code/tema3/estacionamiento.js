const estacionamiento = new Array(10).fill(null);

// Muestra el estado del estacionamiento
function mostrarEstado(indice=0, mensaje="Estado actual del estacionamiento\n"){
  if(indice>=estacionamiento.length){
    alert(mensaje)
    return
  }

  if(estacionamiento[indice] === null){
    mensaje += `Espacio ${indice + 1}: Libre\n`
  } else{
    mensaje += `Espacio ${indice + 1}: Ocupado por el vehículo ${estacionamiento[indice]}\n`
  }

  mostrarEstado(indice + 1, mensaje)
}

//Busca un espacio disponible 
function buscarEspacioDisponible() {
  function buscarEspacioRecursivo(indice) {
    if (indice >= estacionamiento.length) { 
      return -1;
    }

    if (estacionamiento[indice] === null) { 
      return indice;
    }
    return buscarEspacioRecursivo(indice + 1);
  }

  const indiceDisponible = buscarEspacioRecursivo(0) 
  if (indiceDisponible === -1) {
    alert("No hay espacios disponibles.")
  } else {
    alert(`El espacio ${indiceDisponible + 1} esta disponible.`)
  }
}

//Ocupar espacio 
function ocuparEspacio() {
  const espacio = parseInt(prompt ("Ingrese el numero de espacio que desea ocupar:"))
   if (isNaN(espacio) || espacio <1 || espacio > estacionamiento.length) {
    alert("Número de espacio invalido.")
  return;
  }
  
  if (estacionamiento [espacio - 1] != null) {
    alert("El espacio seleccionado ya esta ocupado.")
    return;
  }
  
  const vehiculo = prompt("Ingrese el nombre o rimero de placa del vehiculo:")
  estacionamiento[espacio - 1] = vehiculo;
  alert(`El espacio ${espacio} ha sido ocupado por el vehiculo ${vehiculo}.`) 
}

//Liberar espacio
function liberarEspacio() {
  const espacio = parseInt(prompt ("Ingrese el numero de espacio que desea liberar:"))
   if (isNaN(espacio) || espacio <1 || espacio > estacionamiento.length) {
    alert("Numero de espacio invalido.");
    return;
  }
  
  if (estacionamiento[espacio - 1] === null) {
    alert("El espacio seleccionado ya esta libre.")
    return;
  } 
  
  const vehiculo = estacionamiento[espacio - 1];
  estacionamiento[espacio - 1] = null;
  alert(`El espacio ${espacio} ha sido liberado. El vehiculo ${vehiculo} ha salido.`)
}

// Funcion de menu
function mostrarMenu() {
  var opcion = prompt(
    "Seleccione una opción:\n" +
    "1. Mostrar estado actual del estacionmiento\n" +
    "2. Buscar un espacio disponible\n" +
    "3. Ocupar espacio\n" +
    "4. Liberar espacio\n" +
    "5. Salir\n" +
    "Ingrese el número de la opción:"
  )
  switch (opcion) {
    case "1":
      mostrarEstado();
      mostrarMenu();
      break;
    case "2":
      buscarEspacioDisponible();
      mostrarMenu();
      break;
    case "3":
      ocuparEspacio();
      mostrarMenu();
      break;
    case "4":
      liberarEspacio();
      mostrarMenu();
      break;
    case "5":
      window.close()
      return;
    default:
      alert("Opción inválida. Por favor, selecciona una opción válida.");
      mostrarMenu();
      break;
  }
}

mostrarMenu();