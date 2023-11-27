/**
 * Calcula el factorial de un número utilizando un bucle "for".
 * @param numero  El número del cual se desea calcular el factorial.
 * @return El factorial del número dado.
 */

function factorialFor(numero) {
    let resultado = 1;
  
    // Caso base: cuando el número es 0 o 1, el factorial es siempre 1
    if (numero === 0 || numero === 1) {
      return resultado;
    } else {
      // repetir desde 2 hasta el número
      for (let i = 2; i <= numero; i++) {
        resultado = resultado * i;
      }
    }
    return resultado;
  }
  
  // Esta función calcula el factorial de un número utilizando recursión
  function factorialRecursion(numero) {
    // Caso base: cuando el número es 0 o 1, el factorial es siempre 1
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      // Caso recursivo: multiplicamos el número por el factorial de (numero-1)
      return numero * factorialRecursion(numero - 1);
    }
  }

function mostrarMenu(){
    var option = prompt(
                      "selecciona una opción \n" +
                      "1. Calcular factorial con FOR \n" +
                      "2. Calcular factorial con Recursión\n" +
                      "3.- Salir"
                      )

    switch (option) {
          case "1":
                   var numero = prompt("Introduce un numero")
                   var res = factorialFor(numero)
                   alert("El factorial es: " + res) 
                   mostrarMenu()
                break;
          case "2":
                   var numero = prompt("Introduce un numero")
                   var res = factorialRecursion(numero)
                   alert("El factorial es: " + res) 
                   mostrarMenu()
                break;
         case "3":
            window.close()
            return;
          default:
                alert("Opcion invalida")
                break;
    }     
}
mostrarMenu()