/**
 * Cálculo de encuentro, respecto distancia y tiempo .
 * @method calculoEncuentro
 * @return
 */
function calculoEncuentro() {
    let v1 = document.lasUnidades.input_velocidad1.value;
    let u1 = document.lasUnidades.input_unidad1.value;
    let p1 = document.lasUnidades.input_posicion1.value;
    let u1s = document.lasUnidades.input_unipri.value;
    let v2 = document.lasUnidades.input_velocidad2.value;
    let u2 = document.lasUnidades.input_unidadseg.value;
    let p2 = document.lasUnidades.input_posicion2.value;
    let u2s = document.lasUnidades.input_uniseg.value;

    //Cambiar la coma
    if (v1.includes(",")) {
        v1 = v1.replace(",", ".");
    }...

    //Verificar is Nan
    if(isNaN(v1)){
        alert("La velocidad 1 debe ser un número");
        v1 = 0;
    }
    if(){

    }...


    //Conversion de unidades
    if(u1==="kmh"){
        v1 = v1 * 100;
    }
    if(){

    }

    //calculo


    //asigno


    console.log(v1, u1,p1,u1s,v2,u2,p2,u2s);
    /*
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

    if (valor.includes(",")) {
        valor = valor.replace(",", ".");
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
        velocidad_11 = convertirUnidades(velocidad1, input_unidad1);
    }
    if (input_unipri != "m") {
        posicion_11 = convertirUnidades(posicion1, input_unipri);
    }
    if (input_unidadseg != "m/s") {
        velocidad_22 = convertirUnidades(velocidad2, input_unidadseg);
    }
    if (input_uniseg != "m") {
        posicion_22 = convertirUnidades(posicion2, input_uniseg);
    }

    var tiempo;
    tiempo = (posicion_11 - posicion_22) / (velocidad_22 - velocidad_11);
    tiempo = tiempo * 3600;
    distancia = posicion_11 + velocidad_11 * Number(tiempo);

    // mostrar resultados
    document.getElementById("resul_tiempo").value = tiempo + "  s";
    document.getElementById("resul_distancia").value = distancia + "  m";
*/

}