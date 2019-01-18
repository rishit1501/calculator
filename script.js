var display = document.getElementById("screen");
var buttons = document.getElementsByClassName("button");
var operator_status =true;
var operators=["+","-","*","/"];
let dot_status=false; //if false then add dot to string/display else dont
var op;
var len =0;
var result;
var i=1;
  
  Array.prototype.forEach.call(buttons, function(button) {
  button.addEventListener("click", function() {
    if (button.textContent != "=" && 
    button.textContent != "C" && 
    button.textContent != "x" &&
    button.textContent != "±" &&  
    button.textContent != "÷" &&
    button.textContent != "√" && 
    button.textContent != "x ²" &&
    button.textContent != "x ³" && 
    button.textContent != "<=" &&  
    button.textContent != "x^" &&
    button.textContent != "." &&
  //  button.textContent==operators.includes(button.textContent)&&
    button.textContent != "H" && 
    button.textContent != "x !" ) 
    {
      
      if(checkLength(display.value+=button.textContent))
      {
        display.value=display.value;
        len+=1;
        }
      
      else
      {
        display.value = display.value.slice(0, display.value.length - 1);
        len-=1;
        alert("max");
      }
    } else if (button.textContent === "=") {
      equals();
    } else if (button.textContent === ".") {
      dot();
    } else if (button.textContent === "C") {
      clear();
   // }// else if (operators.includes(button.textContent)) {
     // op=button.textContent;
     // addOperator();
    } else if (button.textContent === "x") {
      multiply();
    } else if (button.textContent === "÷") {
      divide();
    } else if (button.textContent === "±") {
      plusMinus();
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
    } else if (button.textContent === "H") {
      showHistory();
    }
  });
});

/*
function addOperator()
{
  console.log("operator");  
  let str_last_value = display.value.charAt(display.value.length-1);
  if(!operators.includes(str_last_value) && (str_last_value !="-"))
  {
    display.value=display.value;
    len+=1;
    dot_status=false;
  }
  else if(operators.includes(str_last_value) && (str_last_value =="-") )
  {
    display.value = display.value.slice(0, display.value.length - 1);
    len-=1;
    dot_status=false;
  }
}
*/
function dot()
{
  if(!dot_status)
  {
    display.value+=".";
    len+=1;
    dot_status=true;
  }
  else{
    display.value+=".";
    display.value = display.value.slice(0, display.value.length - 1);
    len-=1;
  }
}
function syntaxError() {
    try 
    {
      eval(display.value); 
    } 
    catch (e) {
      if (e instanceof SyntaxError || eval(display.value) == ReferenceError || eval(display.value) == TypeError) {
          return true;
      }
      else
      {
        return false;
      }
    }
 /* if (eval(display.value) == SyntaxError || eval(display.value) == ReferenceError || eval(display.value) == TypeError) {
     display.value == "Syntax Error";
  //  return true;
  }*/
 // return false;

}


function equals() {
  let here_ans;
  if(syntaxError())
  {
    alert("syntax error");
    display.value="";
  }
  else
  {
    if ((display.value).indexOf("^") > -1) {
      let eq = display.value;
      var base = (display.value).slice(0, (display.value).indexOf("^"));
      var exponent = (display.value).slice((display.value).indexOf("^") + 1);
      display.value = eval("Math.pow(" + base + "," + exponent + ")");
      let ans = eval("Math.pow(" + base + "," + exponent + ")");
  
      result={eq,ans};
  
    } else {
      
      // result = display.value;
      let eq = display.value; 
      // display.value = eval(display.value);
      // let ans = display.value;
      let ans;
      here_ans = eval(display.value);
      
    /*  if( here_ans.indexOf(".")>=0)
      {
        console.log(here_ans.indexOf(".")>=0)
        ans= parseFloat(here_ans).toFixed(10);
        ans=ans.toString().substring(0,9);
        //ans.toFixed(10).toPrecision(10);
        display.value=ans;
      } 
      else{
        if(here_ans.length>9)
        {
          ans = here_ans.substring(0,9);
          display.value=and;
        }
        else
        {
          ans=here_ans;
          display.value=ans;
        }
      }*/
      
      if(typeof eval(display.value) == "float")
      {
        
      }
      else
      {
        ans=eval(display.value);
      //  ans = ans.substring(0,9);
        display.value=ans;
      }
      result={eq,ans};
      //checkLength();
      syntaxError();
    }

  }
  
  updateOutput();
}


function clear() {
  display.value = "";
  window.location.reload();
}

function backspace() {
 
  if(len==0)
  {
    display.value=0;
  }
  else
  {
    // console.log(display.value);
    //console.log((display.value.slice(0, display.value.length - 1)));
    display.value=display.value.slice(0, display.value.length - 1);
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
  let eq;
  if (display.value === 0) {
    display.value = "1";
  } else if (display.value < 0) {
    display.value = "undefined";
  } else {
    eq = display.value + "!" ;
    var number = 1;
    for (var i = display.value; i > 0; i--) {
      number *=  i;
    }
    
    number=parseFloat(number).toFixed(9);

    number= number.toString().substring(0,9);
    display.value = number;
  }
  let ans = display.value;
  result= {eq,ans};
  updateOutput();
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
  /*let eq = "√" + display.value  ;
  display.value = Math.sqrt(display.value);
  let ans = display.value;
    result= {eq,ans};*/
    
   // console.log(typeof display.value);
    let eq = "√" + display.value; 
    // display.value = eval(display.value);
    // let ans = display.value;
    let ans;
    if(typeof  Math.sqrt(display.value).length >= "10")
    {
       ans =  Math.sqrt(display.value);
      ans = parseFloat(ans).toFixed(10);
     // console.log(typeof ans, ans);
      display.value=ans.toString();
    //  console.log(typeof display.value);
    }
    else
    {
      ans=eval(display.value);
      ans.substring(0,9);
      display.value=ans;
    }
  //  console.log(display.value.length);
    result={eq,ans};
    updateOutput(); 
}



function exponent() {
  display.value += "^";
}

function checkLength()
{
 // console.log(display.value.length);
  if(display.value.length < 10) {
    return true;
  }
  return false;
}

function updateOutput()
{
  let abc=[];
  abc=JSON.parse(localStorage.getItem('ans'));
  // console.log(typeof abc);
  if(abc == null)
  {
    abc=[];
  }
  if(Object.keys(abc).length>9)
  {
    abc.shift();  
  }
  abc.push(result);
 // abc.push(display.value);
  localStorage.setItem('ans',JSON.stringify(abc));
 /* for (var i = 0; i < localStorage.length; i++)
  {
    console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
    // do something with localStorage.getItem(localStorage.key(i));
  }*/ 
  
 
}

window.onload=function(){
let history=[];
history =JSON.parse(localStorage.getItem('ans'));
 if(history !== null)
 {
  let ulID=document.getElementById('HistorySection');
  history.forEach(element => {
    let newLI=document.createElement('li');
    newLI.textContent=("Equation :"+element.eq+ " Ans :"+element.ans);
    ulID.appendChild(newLI); 
  });
 }
}
/*
function updateHistory(){
let history=[];
 history =JSON.parse(localStorage.getItem('ans'));
 if(history !== null)
 {
  let ulID=document.getElementById('HistorySection');
  history.forEach(element => {
    let newLI=document.createElement('li');
    newLI.textContent=("Equation :"+element.eq+ " Ans :"+element.ans);
    ulID.appendChild(newLI); 
  });
 }
}
 
*/

function showHistory()
{
  console.log("history");
  // $( "#history" ).load(window.location.href + " #history" );
  $("#historybtn").click(function() {
    alert('clicked')
    $("#history").load(" #history >  *");
  }); 
  console.log("history");
}

function plusMinus() {
  if (display.value.charAt(0) === "-") {
    display.value = display.value.slice(1);
  } else {
    display.value = "-" + display.value;
  }
}