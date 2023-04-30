const numero1 = document.getElementById("num1")
const numero2 = document.getElementById("num2")
const operacion = document.getElementById("operador")
const calculo = document.getElementById("calcular")
const respuesta = document.getElementById("resultado")

function calculadora() {
    if (operador == "+" || operador == "-" || operador == "*" || operador == "/") {
        console.log("calculo posible!")

    } else {
        console.log("asegurate de completar correctamente los campos")
    }

}