var lenguajes = ['Python', 'java', 'c#','JavaScrip']
// 'C', 'PHP', 'Pascal', 'Objetive-C', 'C++'

function imprimeForbasico(_lenguajes){
    let salida= ''
    for(i=0; i<_lenguajes.length; i++){
        salida += _lenguajes[i] + '\n'
    }
    alert(salida)
 }

function imprimeFor(_lenguajes){
    let salida= ''
    for(i=0; i<_lenguajes.length; i++){
        salida += _lenguajes[i] + ' se encuentra en el indice ' + i + '\n'
    }
    alert(salida)
 }

function imprimeForechbasico(_lenguajes){
    let salida=''
    _lenguajes.forEach(element => 
        salida += element + '\n'
    )
    alert(salida)
}

function imprimeForech(_lenguajes){
    let salida=''
    _lenguajes.forEach(function (valor, indice){
        salida += valor + ' se encuentra en el indice ' + indice + '\n'
        })

    alert(salida)
}

function imprimeTamaño(_lenguajes){
    let salida = _lenguajes.length;
    alert(salida)
}

function imprimeElemento(){
  let posicion= prompt('Ingresa la posicion que quieres imprimir')
  let salida=''
    if( posicion < lenguajes.length || posicion < 0){ //o posicion es menor a 0
      salida = "El elemento en la posición " + posicion + " es: " + lenguajes[posicion] 
    } else{
      salida = "El elemento en la posición que ingresaste no existe, el arreglo tiene " + lenguajes.length + " elementos"
    }
    alert(salida)
}

function agregarElemento(){
  let salida=''
  let elemento= prompt('Ingresa un nuevo lenguaje de programacion')
  lenguajes.push(elemento)
  salida="El lenguaje de programacion " + elemento + " ha sido agregado correctamente al arreglo"

  alert(salida)
}

function eliminaElemento(){
  let salida=''
  let elemento= prompt("Cual es el lenguaje que deseas eliminar")
  var indice = lenguajes.indexOf(elemento)
  if(indice !== -1){
    lenguajes.splice(indice, 1)
    salida = 'Lenguaje eliminado: ' + elemento
  } else  salida='el lenguaje no se ha encomtrado'

  alert(salida)
}

function mostrarMenu(){
    let opcion = prompt('Seleccione una opción:' +
                        '\n1. Imprimir lenguajes con "for" básico.'+
                        '\n2. Imprimir lenguajes con "for" y su índice.' +
                        '\n3. Imprimir lenguajes con "forEach" básico.'+
                        '\n4. Imprimir lenguajes con "forEach" y su índice.' +
                        '\n5. Imprime tamaño del arreglo.' +
                        '\n6. Imprime elemento del arreglo.' + 
                        '\n7. Agrega un elemento al arreglo.' + 
                        '\n8. Elimina un elemento al arreglo.' +
                        '\nIngrese el número de la opción:');
  switch (opcion) {
    case '1':
      imprimeForbasico(lenguajes);
      break;
    case '2':
      imprimeFor(lenguajes);
      break;
    case '3':
      imprimeForechbasico(lenguajes);
      break;
    case '4':
      imprimeForech(lenguajes);
      break;
    case '5':
      imprimeTamaño(lenguajes);
      break;
    case '6' :
      imprimeElemento();
      break;
    case '7':
      agregarElemento();
      break;
    case '8':
      eliminaElemento();
      break;
    default:
      alert('Opción inválida. Seleccione otra opción.');
      break;
  }
}

mostrarMenu()