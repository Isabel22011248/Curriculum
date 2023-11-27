
var numeroSecreto = Math.trunc(Math.random() * 20) + 1;
var intentos = 7;
var logrado = 0;


 function adivinaNumero(_numero, _vidas, _logrado) {
    while(true){
        _vidas=_vidas-1
        _logrado += 1
        var usuario = prompt("Piensa en un número entre el 1 y el 20. ¿Cuál es?")
        if(usuario == 0){
            break
        }
        else if(_vidas == 0 ){
            alert("Has perdido")
            break
        }
        else if(usuario == _numero){
            alert("Has ganado al intento "+_logrado)
            break
        }
        else if(usuario < _numero){
            alert("El número es menor, vuelve a intentarlo")
        }
        else if(usuario > _numero){
            alert("El número es mayor, vuelve a intentarlo")
        }
        
    }
}

adivinaNumero(numeroSecreto, intentos, logrado)

