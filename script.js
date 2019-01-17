var display = document.getElementById("textarea");
var buttons = document.getElementsByClassName("button");
var historyId=0;

console.log("in js");




function syntaxError() {
    if (eval(display.value) == SyntaxError || eval(display.value) == ReferenceError || eval(display.value) == TypeError) {
      display.value == "Syntax Error";
    }
  }
  
  
  function equals() {
    if ((display.value).indexOf("^") > -1) {
      var base = (display.value).slice(0, (display.value).indexOf("^"));
      var exponent = (display.value).slice((display.value).indexOf("^") + 1);
      display.value = eval("Math.pow(" + base + "," + exponent + ")");
    } 
    else {
      display.value = eval(display.value)
      checkLength()
      syntaxError()
    }
  
    updateOutput()
  }
  
  function clear() {
    display.value = "";
  }
  
  function backspace() {
    display.value = display.value.substring(0, display.value.length - 1);
  }
  
  function multiply() {
    display.value += "*";
  }
  
  function divide() {
    display.value +=  "/";
  }
  
  function checkLength()
  {
    for (var i = 0; i < display.value.length; i++) {
      var ch = str.charAt(i);
      if (ch < "0" || ch > "9") {
        if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
          && ch != "(" && ch!= ")" && ch != "%") {
          alert("invalid entry!");
          return false;
          }
        }
      }
    return true;
    
  }
  
  function factorial() {
    var number = 1;
    if (display.value === 0) {
      display.value = "1";
    } else if (display.value < 0) {
      display.value = "undefined";
    } else {
      var number = 1;
      for (var i = display.value; i > 0; i--) {
        number *=  i;
      }
      display.value = number;
    }
  }
  
  
  
  function square() {
    display.value = eval(display.value * display.value);
    console.log("hello");
  }
  
  function squareRoot() {
    display.value = Math.sqrt(display.value);
  }
  
  
  function exponent() {
    display.value += "^";
  }
  
  
  
  /*     */
  
  function updateOutput()
  {
 /*     historyId++;
      $("#history").append("<li id='history-" + historyId + "'>" + calcScreen.value + "</li>");
      result = eval(calcScreen.value);
      calcScreen.placeholder = result;
      $("#history-" + historyId).append(" = " + result);
  
  console.log(calcScreen.value);
  res=true;
  addToTextArea(result);*/
  }







/* */


Array.prototype.forEach.call(buttons, function(button) {
  button.addEventListener("click", function() {
    if (button.textContent != "=" && 
    button.textContent != "C" && 
    button.textContent != "x" && 
    button.textContent != "÷" && 
    button.textContent != "√" && 
    button.textContent != "x&#50;" && 
    button.textContent != "%" && 
    button.textContent != "CE" && 
    button.textContent != "x^" && 
    button.textContent != "x!" ) {
      display.value += button.textContent;
    } else if (button.textContent === "=") {
      equals();
    } else if (button.textContent === "C") {
      clear();
    } else if (button.textContent === "x") {
      multiply();
    } else if (button.textContent === "÷") {
      divide();
    } else if (button.textContent === "CE") {
      backspace();
    } else if (button.textContent === "x²") {
      square();
    } else if (button.textContent === "√") {
      squareRoot();
    }  else if (button.textContent === "x^") {
      exponent();
    } else if (button.textContent === "x!") {
      factorial();
    } 
  });
});


console.log("in js");