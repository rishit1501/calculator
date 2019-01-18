var display = document.getElementById("mainscreen");
var secondDispaly = document.getElementById("subscreen");
var buttons = document.getElementsByClassName("button");
var toEval = ""; //val to evaluate input
let visibile_cnt = 0; 
let dot_status = false; //if false then add dot to string/display else dont

var len = 0;
var result;
var i = 1;
secondDispaly.value="";

//event listners for all buttons
Array.prototype.forEach.call(buttons, function (button) {
	button.addEventListener("click", function () {
		if (button.textContent != "=" &&
			button.textContent != "C" &&
			button.textContent != "x" &&
			button.textContent != "±" &&
      button.textContent != "÷" &&
      button.textContent != "+" &&
      button.textContent != "-" &&
			button.textContent != "√" &&
			button.textContent != "x ²" &&
			button.textContent != "x ³" &&
			button.textContent != "<=" &&
			button.textContent != "x^" &&
			button.textContent != "." &&
			
			button.textContent != "H" &&
			button.textContent != "x !") {
			//if length is less than 10 charater will be added to current value	
			if (checkLength(display.value += button.textContent)) {
				display.value = display.value;
				len += 1;
			} else {
				display.value = display.value.slice(0, display.value.length - 1);
				len -= 1;
				alert("max");
			}
		} else if (button.textContent === "=") {
			equals();
		} else if (button.textContent === ".") {
			dot();
		} else if (button.textContent === "C") {
			clear();
    } else if (button.textContent === "+") {
			add();
		} else if (button.textContent === "-") {
			minus();
		}else if (button.textContent === "x") {
			multiply();
		} else if (button.textContent === "÷") {
			divide();
		} else if (button.textContent === "±") {
			plusMinus();
		} else if (button.textContent === "<=") {
			backspace();
		} else if (button.textContent === "x ²") {
			square();
		} else if (button.textContent === "x ³") {
			cube();
		} else if (button.textContent === "√") {
			squareRoot();
		} else if (button.textContent === "x^") {
			exponent();
		} else if (button.textContent === "x !") {
			factorial();
		} else if (button.textContent === "H") {
			showHistory();
		}
	});
});


//to restrict multiple times dot
function dot() {
	if (!dot_status) {
		display.value += ".";
		len += 1;
		dot_status = true;
	} else {
		display.value += ".";
		display.value = display.value.slice(0, display.value.length - 1);
		len -= 1;
	}
}


///check syntax error
function syntaxError() {
	try {
		eval(display.value);
	} catch (e) {
		if (e instanceof SyntaxError || eval(display.value) == ReferenceError || eval(display.value) == TypeError ) {
			return true;
		} else {
			return false;
		}
	}
}

//equal function attempt

function equals() {
  toEval+=display.value;
  secondDispaly.value+=display.value;
	let here_ans;
	if (syntaxError()) {
		alert("syntax error");
		display.value = "";
	} else {
		if ((toEval).indexOf("^") > -1) {
			let eq = toEval;
			var base = (toEval).slice(0, (toEval).indexOf("^"));
			var exponent = (toEval).slice((toEval).indexOf("^") + 1);
			display.value = eval("Math.pow(" + base + "," + exponent + ")");
			let ans = eval("Math.pow(" + base + "," + exponent + ")");
			result = {
				eq,
				ans
			};

		} else {
			let eq = toEval;
			
			let ans;
			here_ans = eval(toEval).toString();

			if (here_ans.includes(".")) {
				console.log(here_ans.indexOf(".") >= 0)
				ans = parseFloat(here_ans).toFixed(10);
				ans = ans.toString().substring(0, 9);
				
				display.value = ans;
			} else {
				if (here_ans.length > 9) {
					ans = here_ans.substring(0, 9);
					display.value = ans;
				} else {
					ans = here_ans;
					display.value = ans;
				}
			}
			result = {
				eq,
				ans
			};
			syntaxError();
		}

	}

	updateOutput();
}


//clear screen button
function clear() {
	display.value = "";
	secondDispaly.value="";
	window.location.reload();
}

//to remove characters from end
function backspace() {

	if (len == 0) {
		display.value = "";
	} else {
		
		display.value = display.value.slice(0, display.value.length - 1);
		len -= 1;
	}
}

//functions to display +,-,* and /
function add() 
{
  display.value += "+";
  secondDispaly.value+=display.value;
  toEval+=secondDispaly.value;
  display.value="";
  dot_status = false;
}

function minus() 
{
  display.value += "-";
  secondDispaly.value+=display.value;
  toEval+=secondDispaly.value;
  display.value="";  
  dot_status = false;
}
function multiply() 
{
  display.value += "*";
  secondDispaly.value+=display.value;
  toEval+=secondDispaly.value;
  display.value=""; 
  dot_status = false;
}
function divide() {
  display.value += "/";
  secondDispaly.value+=display.value;
  toEval+=secondDispaly.value;
  display.value="";
  dot_status = false;
}

//function to calculate factorial
function factorial() {
  if(display.value.indexOf(".")<= '-1'){
	var number = 1;
	let eq;
	if (display.value === 0) {
		display.value = "1";
	} else if (display.value < 0) {
		display.value = "undefined";
	} else {
		eq = display.value + "!";
		var number = 1;
		for (var i = display.value; i > 0; i--) {
			number *= i;
		}

		number = parseFloat(number).toFixed(9);

		number = number.toString().substring(0, 9);
		display.value = number;
	}
	let ans = display.value;
	result = {
		eq,
		ans
	};
	updateOutput();
}else{
  alert("Cant do factorial of floating point");
}
}

//function to calculate square
function square() {
  display.value += "²";
  secondDispaly.value+=display.value;
	let eq = display.value + "²";
	display.value = eval(display.value * display.value);
	let ans = display.value;
	result = {
		eq,
		ans
	};
	updateOutput();
}

//function to calculate cube
function cube() {
  display.value += "³";
  secondDispaly.value+=display.value;

	let eq = display.value + "³";
	display.value = eval(display.value * display.value * display.value);
	let ans = display.value;
	result = {
		eq,
		ans
	};
	updateOutput();
}

//function to calculate square root
function squareRoot() {
	
  display.value += "√";
  secondDispaly.value+=display.value;
	let eq = "√" + display.value;
	
	let ans;
	if (typeof Math.sqrt(display.value).length >= "10") {
		ans = Math.sqrt(display.value);
		ans = parseFloat(ans).toFixed(10);
		
		display.value = ans.toString();
		
	} else {
		ans = eval(display.value);
		ans.substring(0, 9);
		display.value = ans;
	}
	
	result = {
		eq,
		ans
	};
	updateOutput();
}

//function to calculate exponent
function exponent() {
  display.value += "^";
  secondDispaly.value+=display.value;
  toEval+=secondDispaly.value;
  display.value="";
  dot_status = false;
}

//function to checklength of display
function checkLength() {
	// console.log(display.value.length);
	if (display.value.length < 10) {
		return true;
	}
	return false;
}

//function to update history and localstorage
function updateOutput() {
  	let abc = [];
	abc = JSON.parse(localStorage.getItem('ans'));
	if (abc == null) {
		abc = [];
	}
	if (Object.keys(abc).length > 9) {
		abc.shift();
	}
	abc.push(result);
	localStorage.setItem('ans', JSON.stringify(abc));
	
}

//update history display section to on load of window
window.onload = function () {
	let history = [];
	history = JSON.parse(localStorage.getItem('ans'));
	if (history !== null) {
		let ulID = document.getElementById('HistorySection');
		history.forEach(element => {
			let newLI = document.createElement('li');
			newLI.textContent = ("Equation :" + element.eq + " Ans :" + element.ans);
			ulID.appendChild(newLI);
		});
	}
}

function updateHistory(){

  
}


//show / hide history senction
function showHistory() {
	
  let history_container = document.getElementById("history");
  if(visibile_cnt==0)
  {
    
    console.log("updated show");
    history_container.style.visibility = "visible";
    visibile_cnt=1;
    
  }
  else if(visibile_cnt==1)
  {
	window.location.reload();
    history_container.style.visibility = "hidden";
	visibile_cnt=0;
	 
  }
	
}

//change sign of number 
function plusMinus() {
	if (display.value.charAt(0) === "-") {
		display.value = display.value.slice(1);
	} else {
		display.value = "-" + display.value;
	}
}