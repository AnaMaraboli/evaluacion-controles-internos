function evaluarControles() {
    const respuestas = [
        document.getElementById('entorno-sub1').value,
        // Más preguntas aquí...
    ];

    let controlFaltante = [];
    let todasRespuestasSi = true;

    respuestas.forEach((respuesta, index) => {
        if (respuesta !== 'si') {
            todasRespuestasSi = false;
            controlFaltante.push(index + 1);
        }
    });

    let resultado;
    if (todasRespuestasSi) {
        resultado = "<div class='alert alert-success'>Todos los controles están en cumplimiento.</div>";
    } else {
        resultado = "<div class='alert alert-danger'>Los siguientes controles necesitan atención: " + controlFaltante.join(", ") + "</div>";
    }

    document.getElementById('resultado-controles').innerHTML = resultado;
}
