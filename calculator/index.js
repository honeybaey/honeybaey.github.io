function calc() {
  const display = easyToSearch("#display");
  const clearButton = easyToSearch("#clear");
  const removeButton = easyToSearch("#remove");
  const equal = easyToSearch("#equal");
  const ops = easyToSearch(".ops");
  const nums = easyToSearch(".num");

  let num = "";
  let oldNum = "";
  let resultNum;
  let operator;

  // simple element search
  function easyToSearch(element) {
    if (element.charAt(0) === "#") {
      return document.querySelector(element);
    }

    return document.querySelectorAll(element);
  }

  // setting operators
  function setOps() {
    if (!operator) {
      oldNum = num;
      num = "";
      operator = this.value;
    }
  }
  // setting operators for keyboard
  function setOpsOnKeyboard(val) {
    if (!operator) {
      oldNum = num;
      num = "";
      operator = val;
    }
  }

  for (let i = 0; i < ops.length; i++) {
    ops[i].onclick = setOps;
  }

  // displaying numbers
  function setNums() {
    num += this.value;
    display.value = num;
  }

  // displaying numbers for keyboard
  function setNumsOnKeyboard(val) {
    num += val;
    display.value = num;
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i].onclick = setNums;
  }

  // clearing the display
  function onClearButton() {
    display.value = "";
    oldNum = "";
    num = "";
    dot.value = ".";
  }
  clearButton.addEventListener("click", onClearButton);

  // removing the last char
  function onRemoveButton() {
    display.value = display.value.slice(0, -1);
    oldNum = display.value;
    num = display.value;
  }
  removeButton.addEventListener("click", onRemoveButton);

  // blocking entry >1 dot
  function blockDot() {
    if (display.value.includes(".")) {
      dot.value = "";
    } else {
      dot.value = ".";
    }
  }
  const dot = document.querySelector(".dot");
  dot.addEventListener("click", blockDot);

  // the calculations are displayed
  function displayNum() {
    oldNum = parseFloat(oldNum);
    num = parseFloat(num);

    switch (operator) {
      case "+":
        resultNum = oldNum + num;
        break;

      case "-":
        resultNum = oldNum - num;
        break;

      case "*":
        resultNum = oldNum * num;
        break;

      case "/":
        resultNum = oldNum / num;
        break;

      default:
        resultNum = num;
    }

    if (!isFinite(resultNum)) {
      resultNum = "Ошибка";
    }

    display.value = parseFloat(resultNum.toFixed(2));
    oldNum = 0;
    num = resultNum;
    operator = null;
  }

  // support for keyboard
  document.addEventListener("keydown", function (e) {
    if (e.code === "Backspace") {
      onRemoveButton();
    }
    if (e.code === "Delete") {
      onClearButton();
    }
    if (e.code === "Equal") {
      displayNum();
    }
    if (e.code === "Digit0" || e.code === "Numpad0") {
      setNumsOnKeyboard("0");
    }
    if (e.code === "Digit1" || e.code === "Numpad1") {
      setNumsOnKeyboard("1");
    }
    if (e.code === "Digit2" || e.code === "Numpad2") {
      setNumsOnKeyboard("2");
    }
    if (e.code === "Digit3" || e.code === "Numpad3") {
      setNumsOnKeyboard("3");
    }
    if (e.code === "Digit4" || e.code === "Numpad4") {
      setNumsOnKeyboard("4");
    }
    if (e.code === "Digit5" || e.code === "Numpad5") {
      setNumsOnKeyboard("5");
    }
    if (e.code === "Digit6" || e.code === "Numpad6") {
      setNumsOnKeyboard("6");
    }
    if (e.code === "Digit7" || e.code === "Numpad7") {
      setNumsOnKeyboard("7");
    }
    if (e.code === "Digit8" || e.code === "Numpad8") {
      setNumsOnKeyboard("8");
    }
    if (e.code === "Digit9" || e.code === "Numpad9") {
      setNumsOnKeyboard("9");
    }
    if (e.code === "NumpadDivide") {
      setOpsOnKeyboard("/");
    }
    if (e.code === "NumpadMultiply") {
      setOpsOnKeyboard("*");
    }
    if (e.code === "Minus" || e.code === "NumpadSubtract") {
      setOpsOnKeyboard("-");
    }
    if (e.code === "Plus" || e.code === "NumpadAdd") {
      setOpsOnKeyboard("+");
    }
    if (e.code === "Period" || e.code === "NumpadDecimal") {
      setNumsOnKeyboard(".");
    }
  });

  equal.addEventListener("click", displayNum);
}

window.onload = calc;
