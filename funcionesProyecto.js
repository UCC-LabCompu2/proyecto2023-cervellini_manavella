/**
 * Cálculo de encuentro, respecto distancia y tiempo .
 * @method nombre de la funcion
 * @param {string} id - El id de los inputs de velocidad y posición.
 * @param {number} valor - El valor de los inputs de velocidad y posición.
 * @return
 */

function calculoEncuentro(id, valor) {

    if (valor.includes(",")) {
        valor = valor.replace(",", ".");
    }

    if(isNaN(valor)){
        alert("Se ingresó un valor inválido");
        document.lasUnidades.input_velocidad1.value = "" ;
        document.lasUnidades.input_posicion1.value = "" ;
        document.lasUnidades.input_velocidad2.value = "" ;
        document.lasUnidades.input_posicion2.value = "" ;
    }else if(id == "m" ) {
        m = valor ;
        km = valor * 0,001 ;
        cm = valor * 100 ;

    }

}