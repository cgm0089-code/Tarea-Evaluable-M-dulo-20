function calcular(num1, num2, operacion) {
    switch (operacion) {
        case "sumar":
            return num1 + num2;

        case "restar":
            return num1 - num2;

        case "multiplicar":
            return num1 * num2;

        case "dividir":
            if (num2 === 0) {
                return "Error: no se puede dividir entre 0";
            }
            return num1 / num2;

        default:
            return "Operación no válida";
    }
}

// Nueva función que conecta el HTML con la lógica
function operar(operacion) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    // Validación básica
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultado").textContent = "Introduce números válidos";
        return;
    }

    const resultado = calcular(num1, num2, operacion);
    document.getElementById("resultado").textContent = resultado;
}
let historial = [];

function actualizarHistorial(operacion, resultado) {
    historial.push(`${operacion}: ${resultado}`);
    console.log(historial);
}
