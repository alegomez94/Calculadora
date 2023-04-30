const txtnumero1 = document.getElementById("num1")
const txtnumero2 = document.getElementById("num2")
const txtoperacion = document.getElementById("operacion")
const txtcalculo = document.getElementById("calcular")
const txtrespuesta = document.getElementById("resultado")

function calculadora() {
    const operacion = txtoperacion.value
    const num1 = parseFloat(txtnumero1.value)
    const num2 = parseFloat(txtnumero2.value)



    if ((operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/") && !isNaN(num1) && !isNaN(num2)) {
        let resultadop;
        if (operacion == "+") {
            resultadop = num1 + num2
        } else if (operacion == "-") {
            resultadop = num1 - num2
        } else if (operacion == "*") {
            resultadop = num1 * num2

        } else if (operacion == "/") {
            resultadop = num1 / num2

        }
        txtrespuesta.innerText = resultadop
    } else {
        txtrespuesta.innerText = "Asegurate de ingresar los campos correctamente"
    }

}