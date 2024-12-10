const display = document.querySelector(".display .result");

function appendToDisplay(input) {
  display.value += input;
}

function del() {
  display.value = display.value.slice(0, -1);
}

function reset() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
