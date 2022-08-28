var n1 = "";
var cadena = "";
var op = "";
var resultado;

function press(element) {
  if (cadena == "0") {
    cadena = "";
  }
  cadena += element;
  console.log(cadena);
  document.getElementById("display").innerText = cadena;
}
function setOP(operation) {
  n1 = cadena;
  cadena = "";
  op = operation;
}

function calculate() {
  if (op == "/") {
    resultado = n1 / cadena;
  } else if (op == "+") {
    resultado = n1 + cadena;
  } else if (op == "-") {
    resultado = n1 - cadena;
  } else if (op == "*") {
    resultado = n1 * cadena;
  }
  document.getElementById("display").innerText = resultado;
}

function clr() {
  cadena = "0";
  n1 = "";
  document.getElementById("display").innerText = cadena;
}
