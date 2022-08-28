var n1 = "";
var string = "";
var op = "";
var resultado;

function press(element) {
  if (string == "0") {
    string = "";
  }
  string += element;
  console.log(string);
  document.getElementById("display").innerText = string;
}
function setOP(operation) {
  n1 = string;
  string = "";
  op = operation;
}

function calculate() {
  if (op == "/") {
    resultado = n1 / string;
  } else if (op == "+") {
    resultado = n1 + string;
  } else if (op == "-") {
    resultado = n1 - string;
  } else if (op == "*") {
    resultado = n1 * string;
  }
  document.getElementById("display").innerText = resultado;
}

function clr() {
  string = "0";
  n1 = "";
  document.getElementById("display").innerText = string;
}
