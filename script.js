const numbers = document.querySelectorAll(".number");
const currentValues = document.getElementById("currentValue");
const operators = document.querySelectorAll(".operator");
const inputedValues = document.getElementById("inputedValue");
const operator = document.getElementById("operator");
const clear = document.getElementById("clear");
const del = document.getElementById("delete");
const decimal = document.getElementById("decimal");
const equal = document.getElementById("equals");

clear.addEventListener("click", function () {
  operator.innerText = "";
  inputedValues.innerText = "";
  currentValues.innerText = "";
  firstNumber = "";
  secondNumber = "";
  result = "";
});

del.addEventListener("click", function () {
  currentValues.innerText = currentValues.innerText.slice(0, -1);
});

decimal.addEventListener("click", function () {
  if (!currentValues.innerText.includes(".")) {
    currentValues.innerText += ".";
  }
});

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    if (currentValues.innerText.length < 13) {
      currentValues.innerText += this.innerText;
    }
  });
}

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function () {
    operator.innerText = this.innerText;
    if (currentValues.innerText && !inputedValues.innerText) {
      inputedValues.innerText = currentValues.innerText;
      currentValues.innerText = "";
    }
    if (!currentValues.innerText && !inputedValues.innerText) {
      inputedValues.innerText = "0";
      currentValues.innerText = "";
    }
    if (currentValues.innerText && inputedValues.innerText) {
      operate();
      inputedValues.innerText = result;
      currentValues.innerText = "";
    }
  });
}

equal.addEventListener("click", function () {
  if (currentValues.innerText) {
    operate();
    inputedValues.innerText = "";
    operator.innerText = "";
    result = Math.round(result * 100) / 100;
    currentValues.innerText = result;
  }
});

function operate() {
  firstNumber = parseFloat(inputedValues.innerText);
  secondNumber = parseFloat(currentValues.innerText);
  switch (operator.innerText) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "x":
      result = firstNumber * secondNumber;
      break;
    case "/":
      result = firstNumber / secondNumber;
      break;
    default:
      console.log("Invalid Operator");
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key;

  const button = document.querySelector(`button[data-key="${key}"]`);

  if (button) {
    button.click();
  }
});
