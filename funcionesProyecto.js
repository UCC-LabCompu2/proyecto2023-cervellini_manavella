/**
 * Cálculo de encuentro, respecto distancia y tiempo .
 * @method nombre de la funcion
 * @param {string} id - El id de los inputs de velocidad y posición.
 * @param {number} valor - El valor de los inputs de velocidad y posición.
 * @return
 */


function conversionUnidades(id, valor) {
    if (unidad == "m") {
        valor = valor;
    } else if (unidad == "km") {
        valor = valor * 0.001;
    } else if (unidad == "cm") {
        valor = valor * 100;
    } else if (unidad == "km/h") {
        valor = valor * 0.27778;
    } else if (unidad == "m/s") {
        valor = valor;
    }
}

function calculoEncuentro(id, valor) {

    console.log("haz hecho click");
    var boton = document.getElementById("botoncalcular");
    boton.addEventListener("click", calculoEncuentro);


    if (valor.includes(",")) {
        valor = valor.replace(",", ".");
    }

    // cartel alert si el valor ingresado no es válido
    if (isNaN(valor)) {
        alert("Se ingresó un valor inválido");
        // vaciar campos
        document.lasUnidades.input_velocidad1.value = "";
        document.lasUnidades.input_posicion1.value = "";
        document.lasUnidades.input_velocidad2.value = "";
        document.lasUnidades.input_posicion2.value = "";
    } else {
        conversionUnidades();
    }

    var unidadPos1 = parseFloat(document.getElementById("input_unipri"));
    var unidadVel1 = parseFloat(document.getElementById("input_unidad1"));
    var unidadPos2 = parseFloat(document.getElementById("input_uniseg"));
    var unidadVel2 = parseFloat(document.getElementById("input_unidadseg"));

    velocidad1 = parseFloat(document.getElementById("input_velocidad1"));
    velocidad2 = parseFloat(document.getElementById("input_velocidad2"));
    posicion1 = parseFloat(document.getElementById("input_posicion1"));
    posicion2 = parseFloat(document.getElementById("input_posicion2"));

    // conversión de unidades para aquellas distintas a m o m/s
    if (input_unidad1 != "m/s") {
        velocidad1 = convertirUnidades(velocidad1, input_unidad1);
    }
    if (input_unipri != "m") {
        posicion1 = convertirUnidades(posicion1, input_unipri);
    }
    if (input_unidadseg != "m/s") {
        velocidad2 = convertirUnidades(velocidad2, input_unidadseg);
    }
    if (input_uniseg != "m") {
        posicion2 = convertirUnidades(posicion2, input_uniseg);
    }

    var tiempo;
    tiempo = (posicion1 - posicion2) / (velocidad2 - velocidad1);
    tiempo = tiempo * 3600;
    distancia = posicion1 + velocidad1 * Number(tiempo);

    // mostrar resultados
    document.getElementById("resultado").value = tiempo + "  s";
    document.getElementById("resultado").value = distancia + "  m";

}