const display = document.getElementById("display");

function appendtoDisplay(input) {
  display.value += input;
}

function resetCalculator() {
  display.value = "";
}

function calculate() {
  display.value = eval(display.value);
}
