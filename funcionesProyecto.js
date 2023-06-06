/**
 * Cálculo de encuentro, respecto distancia y tiempo .
 * @method calculoEncuentro
 * @return
 */

// función sobre resolución del ejercicio
function calculoEncuentro() {
    let v1 = document.lasUnidades.input_velocidad1.value;
    let u1 = document.lasUnidades.input_unidad1.value;
    let p1 = document.lasUnidades.input_posicion1.value;
    let u1s = document.lasUnidades.input_unipri.value;
    let v2 = document.lasUnidades.input_velocidad2.value;
    let u2 = document.lasUnidades.input_unidadseg.value;
    let p2 = document.lasUnidades.input_posicion2.value;
    let u2s = document.lasUnidades.input_uniseg.value;

    //Cambiar la coma por el punto
    if (v1.includes(",")) {
        v1 = v1.replace(",", ".");
    }
    if (v2.includes(",")) {
        v2 = v2.replace(",", ".");
    }
    if (p1.includes(",")) {
        p1 = p1.replace(",", ".");
    }
    if (p2.includes(",")) {
        p2 = p2.replace(",", ".");
    }

    //Verificación de los datos ingresados en cada campo
    if (isNaN(v1)) {
        alert("La velocidad 1 debe ser un número");
        document.lasUnidades.input_velocidad1.value = "";
    }
    if (isNaN(v2)) {
        alert("La velocidad 2 debe ser un número");
        document.lasUnidades.input_velocidad2.value = "";
    }
    if (isNaN(p1)) {
        alert("La posición 1 debe ser un número");
        document.lasUnidades.input_posicion1.value = "";
    }
    if (isNaN(p2)) {
        alert("La posición 2 debe ser un número");
        document.lasUnidades.input_posicion2.value = "";
    }

    //Conversión de unidades
    if (u1 === "kmh") {
        v1 = v1 / 3.6;
    }
    if (u2 === "kmh") {
        v2 = v2 / 3.6;
    }
    if (u1s === "km") {
        p1 = p1 * 1000;
    }
    if (u2s === "km") {
        p2 = p2 * 1000;
    }
    if (u1s === "cm") {
        p1 = p1 / 100;
    }
    if (u2s === "cm") {
        p2 = p2 / 100;
    }

    // cálculo
    var tiempo;
    tiempo = (p1 - p2) / (v2 - v1);
    tiempo = tiempo * 3600;
    distancia = p1 + v1 * Number(tiempo);

    // resultados en pantalla
    document.getElementById("resul_tiempo").value = tiempo + " s";
    document.getElementById("resul_distancia").value = distancia + " m";

    console.log(v1, u1, p1, u1s, v2, u2, p2, u2s);

}

function dibujarAuto() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = "imagenes/canvasauto.png";

    canvas.width = canvas.width;

    img.onload = function () {
        ctx.drawImage(img, x, 200);
    }

}

// variables globales
var x= 0;
var dx= 2;

// función para animar auto
function animarAuto() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = "imagenes/canvasauto.png";

    canvas.width = canvas.width;

    console.log("se llamo animar auto")
    img.onload = function () {
        ctx.drawImage(img, x, 200);
    }

    x=x+dx;
}




