const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  let expression = display.value;


  expression = expression.replace(/\^/g, "**");

  expression = expression.replace(/√/g, "Math.sqrt");

  expression = expression.replace(/(\d+)%/g, "($1/100)");

  try {
    display.value = eval(expression);
  } catch {
    display.value = "Error";
  }
}
