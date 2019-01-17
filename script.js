var display = document.getElementById("screen");
var buttons = document.getElementsByClassName("button");
var len =0;
// var result;
var i=1;
  
  Array.prototype.forEach.call(buttons, function(button) {
  button.addEventListener("click", function() {
    if (button.textContent != "=" && 
    button.textContent != "C" && 
    button.textContent != "x" && 
    button.textContent != "÷" && 
    button.textContent != "√" && 
    button.textContent != "x ²" &&
    button.textContent != "x ³" && 
    button.textContent != "<=" &&  
    button.textContent != "x^" && 
    button.textContent != "x !" ) {
      display.value += button.textContent;
    } else if (button.textContent === "=") {
      equals();
    } else if (button.textContent === "C") {
      clear();
    } else if (button.textContent === "x") {
      multiply();
    } else if (button.textContent === "÷") {
      divide();
    }  else if (button.textContent === "<=") {
      backspace();
    } else if (button.textContent === "x ²") {
      square();
    } else if (button.textContent === "x ³") {
      cube();
    }else if (button.textContent === "√") {
      squareRoot();
    } else if (button.textContent === "x^") {
      exponent();
    } else if (button.textContent === "x !") {
      factorial();
    }
  });
});


function syntaxError() {
  // if (eval(display.value) == SyntaxError || eval(display.value) == ReferenceError || eval(display.value) == TypeError) {
  //   display.value == "Syntax Error";
  // }
}


function equals() {
  if ((display.value).indexOf("^") > -1) {
    var base = (display.value).slice(0, (display.value).indexOf("^"));
    var exponent = (display.value).slice((display.value).indexOf("^") + 1);
    display.value = eval("Math.pow(" + base + "," + exponent + ")");
  } else {
    
    // result = display.value;
    let eq = display.value; 
    display.value = eval(display.value);
    let ans = display.value;
    result={eq,ans};
    checkLength();
    syntaxError();
  }
  updateOutput();
}

function clear() {
  display.value = "0";
}

function backspace() {
  
  if(len==0)
  {
    display.value=0;
  }
  else
  {
    display.value = display.value.substring(0, display.value.length - 1);
    len-=1;
  }
}

function multiply() {
  display.value += "*";
}

function divide() {
  display.value +=  "/";
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
  let eq = display.value + "²" ;
  display.value = eval(display.value * display.value);
  let ans = display.value;
  result= {eq,ans};
  updateOutput();
}


function cube() {
  let eq = display.value + "³" ;
    display.value = eval(display.value * display.value * display.value);
    let ans = display.value;
    result= {eq,ans};
    updateOutput();
  }
  
function squareRoot() {
  let eq = "√" + display.value  ;
  display.value = Math.sqrt(display.value);
  let ans = display.value;
    result= {eq,ans};
    updateOutput(); 
}



function exponent() {
  display.value += "^";
}

function checkLength()
{

}

function updateOutput()
{
  let abc=[];
  abc=JSON.parse(localStorage.getItem('ans'));
  if(abc == null)
  {
    abc=[];
  }
  abc.push(result);
 // abc.push(display.value);
  localStorage.setItem('ans',JSON.stringify(abc));
  for (var i = 0; i < localStorage.length; i++)
  {
    console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
    // do something with localStorage.getItem(localStorage.key(i));
  } 
  
}

window.onload=function(){
let history=[];
 history =JSON.parse(localStorage.getItem('ans'));
 let ulID=document.getElementById('HistorySection');
  history.forEach(element => {
    let newLI=document.createElement('li');
    newLI.textContent=("Equation :"+element.eq+ " Ans :"+element.ans);
    ulID.appendChild(newLI); 
  });
}